package hn.unah.backend.services;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hn.unah.backend.config.jwt.JwtUtils;
import hn.unah.backend.dtos.UsuarioDto;
import hn.unah.backend.models.Seguidor;
import hn.unah.backend.models.SeguidorId;
import hn.unah.backend.models.Usuario;
import hn.unah.backend.repositories.SeguidorRepository;
import hn.unah.backend.repositories.UsuarioRepository;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private SeguidorRepository seguidorRepository;

    @Autowired
    private JwtUtils jwtUtils;

    @Autowired
    private DtoMapperService dtoMapperService;

    public Usuario actualizarUsuario(int codigoUsuario, UsuarioDto usuarioDto){
        Usuario usuario = usuarioRepository.findById(codigoUsuario).get();

        if(usuario != null){

            if (usuarioDto.getNombreCompleto() != null){
                usuario.setNombreUsuario(usuarioDto.getNombreCompleto());
            }

            if (usuarioDto.getFechaNacimiento() != null){
                usuario.setFechaNacimiento(usuarioDto.getFechaNacimiento());
            }

            if (usuarioDto.getBiografia() != null){
                usuario.setBiografia(usuarioDto.getBiografia());
            }

            if (usuarioDto.getUbicacion() != null){
                usuario.setUbicacion(usuarioDto.getUbicacion());
            }

            if (usuarioDto.getSitioWeb() != null){
                usuario.setSitioWeb(usuarioDto.getSitioWeb());
            }

            if (usuarioDto.getFotoPerfil() != null){
                usuario.setFotoPerfil(usuarioDto.getFotoPerfil());
            }

            if (usuarioDto.getFotoPortada() != null){
                usuario.setFotoPortada(usuarioDto.getFotoPortada());
            }
            

            Usuario usuarioActualizado = this.usuarioRepository.save(usuario);;
  
            return usuarioActualizado;
        }

        return null;
    }

    public Usuario obtenerPerfilPorJwt(String jwt){
        String correo = jwtUtils.getEmailFromToken(jwt);
        Usuario usuario = this.usuarioRepository.findByCorreo(correo);

        return usuario;
    }


    public Usuario usuarioPorId(int codigoUsuario){
        Usuario usuarioEncontrado = this.usuarioRepository.findById(codigoUsuario).get();

        if (usuarioEncontrado != null){
            return usuarioEncontrado;
        }

        return null;
    }

    

    public Usuario seguirUsuario(int idUsuarioASeguir, UsuarioDto usuarioSeguidorDto){
        Usuario usuarioASeguir = this.usuarioRepository.findById(idUsuarioASeguir).get();
        Usuario usuarioSeguidor = this.usuarioRepository.findById(usuarioSeguidorDto.getId()).get();

        if (this.seguidorRepository.existsById(new SeguidorId(usuarioSeguidor, usuarioASeguir))){
            
            SeguidorId seguidorId = new SeguidorId(usuarioSeguidor, usuarioASeguir);
            this.seguidorRepository.deleteById(seguidorId);

        }else{
            SeguidorId seguidorId = new SeguidorId(usuarioSeguidor, usuarioASeguir);

            Seguidor seguidor = new Seguidor(seguidorId, LocalDate.now());
            this.seguidorRepository.save(seguidor);
        }

        return usuarioASeguir;
    }


    public List<Usuario> buscarUsuario(String filtro){

        List<Usuario> usuarios =  this.usuarioRepository.buscarUsuario(filtro);

        if (usuarios != null){
            return usuarios;
        }

        return null;
    }

}
