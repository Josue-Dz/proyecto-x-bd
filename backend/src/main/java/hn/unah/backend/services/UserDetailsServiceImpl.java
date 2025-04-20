package hn.unah.backend.services;

import java.time.LocalDateTime;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import hn.unah.backend.config.jwt.JwtUtils;
import hn.unah.backend.dtos.AuthCreateUserRequest;
import hn.unah.backend.dtos.AuthLoginRequest;
import hn.unah.backend.dtos.AuthResponse;
import hn.unah.backend.models.Usuario;
import hn.unah.backend.repositories.UsuarioRepository;
import io.jsonwebtoken.lang.Collections;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtils jwtUtils;

    // Carga el usuario con el correo y no con el nombre de usuario
    @Override
    public UserDetails loadUserByUsername(String correo) throws UsernameNotFoundException {
        Usuario usuario = this.usuarioRepository.findByCorreo(correo);

        if (usuario == null) {
           return null;
        }
    
        return new User(usuario.getCorreo(), usuario.getContrasenia(),
                true,
                true,
                true,
                true,
                new ArrayList<>());
    }

    public AuthResponse inicioSesion(AuthLoginRequest authLoginRequest) {
        String correo = authLoginRequest.email();
        String contrasenia = authLoginRequest.password();
        
        try {
            Authentication authentication = this.authenticate(correo, contrasenia);
            SecurityContextHolder.getContext().setAuthentication(authentication);
    
            String accessToken = jwtUtils.createToken(authentication);
    
            return new AuthResponse(correo, "Inicio de sesión del usuario realizado con éxito", accessToken, true);
        } catch (BadCredentialsException ex) {
            return new AuthResponse(correo, ex.getMessage(), null, false);
        }    

    }

    public Authentication authenticate(String correo, String password) {
        UserDetails userDetails = this.loadUserByUsername(correo);

        if (userDetails == null) {
            throw new BadCredentialsException("Correo o contraseña inválidos");
        }

        if (!passwordEncoder.matches(password, userDetails.getPassword())) {
            throw new BadCredentialsException("Contraseña incorrecta");
        }

        return new UsernamePasswordAuthenticationToken(correo, userDetails.getPassword(), userDetails.getAuthorities());
    }

    public AuthResponse registrarUsuario(AuthCreateUserRequest authCreateUserRequest) {

        String nombreBase = authCreateUserRequest.nombreCompleto().split(" ")[0]; // Obtener el primer nombre
        String nombreUsuario;

        do {
            int numeroAleatorio = (int) (Math.random() * 1000); // Generar número aleatorio
            nombreUsuario = nombreBase + numeroAleatorio; // Concatenar nombre y número
        } while (this.usuarioRepository.findByNombreUsuario(nombreUsuario) != null);

        if (this.usuarioRepository.findByCorreo(authCreateUserRequest.correo()) == null) {
            Usuario usuario = new Usuario();
            usuario.setNombreCompleto(authCreateUserRequest.nombreCompleto());
            usuario.setNombreUsuario(nombreUsuario);
            usuario.setFechaNacimiento(authCreateUserRequest.fechaNacimiento());
            usuario.setFechaRegistro(LocalDateTime.now());
            usuario.setCorreo(authCreateUserRequest.correo());
            usuario.setContrasenia(passwordEncoder.encode(authCreateUserRequest.password()));

            Usuario usuarioCreado = this.usuarioRepository.save(usuario);

            Authentication authentication = new UsernamePasswordAuthenticationToken(usuarioCreado.getCorreo(),
                    usuarioCreado.getContrasenia(), Collections.emptyList());

            String accessToken = jwtUtils.createToken(authentication);
            AuthResponse authResponse = new AuthResponse(usuarioCreado.getCorreo(), "Usuario registrado correctamente",
                    accessToken, true);
            return authResponse;
        }

        AuthResponse authResponse = new AuthResponse("", "Este usuario ya se encuentra registrado ", "", false);

        return authResponse;
    }

}
