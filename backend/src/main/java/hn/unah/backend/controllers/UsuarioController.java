package hn.unah.backend.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import hn.unah.backend.dtos.UsuarioDto;
import hn.unah.backend.services.UsuarioService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;



@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = "http://localhost:5173")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;
    
    @GetMapping("/buscar")
    public ResponseEntity<List<UsuarioDto>> buscarUsuario(@RequestParam String filtro) {
        //El token se recibe y valida automáticamente en el filtro de seguridad, no es necesario validarlo aquí
     
        List<UsuarioDto> coincidencias = this.usuarioService.buscarUsuario(filtro);

        if (coincidencias == null || coincidencias.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(coincidencias);
    }

    @GetMapping("/usuario/{codigoUsuario}")
    public ResponseEntity<UsuarioDto> usuarioPorId(@PathVariable(name = "codigoUsuario") int codigoUsuario) {
        //El token se recibe y valida automáticamente en el filtro de seguridad, no es necesario validarlo aquí
        UsuarioDto usuario = this.usuarioService.usuarioPorId(codigoUsuario);

        return ResponseEntity.ok(usuario);
    }

    @GetMapping("/editar")
    public ResponseEntity<UsuarioDto> actualizarUsuario(@RequestBody UsuarioDto usuarioDto) {

        UsuarioDto usuarioActualizado = this.usuarioService.actualizarUsuario(usuarioDto.getId(), usuarioDto);

        return ResponseEntity.ok(usuarioActualizado);
    }
    
    @GetMapping("/seguir/{idUsuarioASeguir}")
    public ResponseEntity<UsuarioDto> seguirUsuario(@PathVariable(name = "idUsuarioASeguir") int idUsuarioASeguir, 
        @RequestBody UsuarioDto usuarioDto) {

       // UsuarioDto usuarioP = this.usuarioService.usuarioPorId(1);//usuarioPrueba

        UsuarioDto usuario = this.usuarioService.seguirUsuario(idUsuarioASeguir, usuarioDto);

        return ResponseEntity.ok(usuario);
    }
    

    @GetMapping("/perfil")
    public ResponseEntity<UsuarioDto> obtenerPerfilUsuario(@RequestHeader("Authorization") String jwt) {
        

        if (jwt.startsWith("Bearer ")) {
            jwt = jwt.substring(7); // Eliminar los primeros 7 caracteres ("Bearer ")
        }
     
        System.out.println("Estoy aca " + jwt);
        UsuarioDto usuarioDto = this.usuarioService.obtenerPerfilPorJwt(jwt);
        return ResponseEntity.ok(usuarioDto);
    }
    
}
