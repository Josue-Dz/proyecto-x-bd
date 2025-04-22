package hn.unah.backend.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import hn.unah.backend.dtos.UsuarioDto;
import hn.unah.backend.models.Usuario;
import hn.unah.backend.services.DtoMapperService;
import hn.unah.backend.services.UsuarioService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;



@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = "http://localhost:5173")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @Autowired
    private DtoMapperService dtoMapperService;

    @GetMapping("/perfil")
    public ResponseEntity<UsuarioDto> obtenerPerfilUsuario(@RequestHeader("Authorization") String jwt) {
        Usuario usuario = usuarioService.obtenerPerfilPorJwt(jwt);

        if (jwt.startsWith("Bearer ")) {
            jwt = jwt.substring(7); // Eliminar los primeros 7 caracteres ("Bearer ")
        }
     
        System.out.println("Estoy aca " + jwt);
        UsuarioDto usuarioDto = dtoMapperService.aUsuarioDto(usuario);

        return new ResponseEntity<>(usuarioDto, HttpStatus.ACCEPTED);
    }

    @GetMapping("/{codigoUsuario}")
    public ResponseEntity<UsuarioDto> obtenerUsuarioPorId(@PathVariable(name = "codigoUsuario") int codigoUsuario) {
        //El token se recibe y valida automáticamente en el filtro de seguridad, no es necesario validarlo aquí
        Usuario usuario = usuarioService.usuarioPorId(codigoUsuario);
        UsuarioDto usuarioDto = dtoMapperService.aUsuarioDto(usuario);

        return new ResponseEntity<>(usuarioDto, HttpStatus.ACCEPTED);
    }
    
    @GetMapping("/buscar")
    public ResponseEntity<List<UsuarioDto>> buscarUsuario(@RequestParam String filtro) {
        //El token se recibe y valida automáticamente en el filtro de seguridad, no es necesario validarlo aquí
     
        List<Usuario> coincidencias = usuarioService.buscarUsuario(filtro);

        if (coincidencias == null || coincidencias.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        List<UsuarioDto> coincidenciasDtos = dtoMapperService.aUsuariosDtos(coincidencias);

        return new ResponseEntity<>(coincidenciasDtos, HttpStatus.ACCEPTED);
    }

    @PutMapping("/editar")
    public ResponseEntity<UsuarioDto> actualizarUsuario(@RequestBody Usuario usuario) {

        Usuario usuarioActualizado = usuarioService.actualizarUsuario(usuario.getCodigoUsuario(), dtoMapperService.aUsuarioDto(usuario));
        UsuarioDto usuarioDto = dtoMapperService.aUsuarioDto(usuarioActualizado);

        return new ResponseEntity<>(usuarioDto, HttpStatus.ACCEPTED);
    }
    
    @GetMapping("/seguir/{idUsuarioASeguir}")
    public ResponseEntity<UsuarioDto> seguirUsuario(@PathVariable(name = "idUsuarioASeguir") int idUsuarioASeguir, 
        @RequestBody Usuario usuario) {

       // UsuarioDto usuarioP = this.usuarioService.usuarioPorId(1);//usuarioPrueba

        Usuario usuarioASeguir = usuarioService.seguirUsuario(idUsuarioASeguir, dtoMapperService.aUsuarioDto(usuario));
        UsuarioDto usuarioDto = dtoMapperService.aUsuarioDto(usuarioASeguir);

        return new ResponseEntity<>(usuarioDto, HttpStatus.ACCEPTED);
    }
    
}
