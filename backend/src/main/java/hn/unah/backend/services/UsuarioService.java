package hn.unah.backend.services;

import java.time.LocalDate;
import java.util.LinkedList;
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

    public UsuarioDto actualizarUsuario(int codigoUsuario, UsuarioDto usuarioDto){
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
            
            this.usuarioRepository.save(usuario);

            UsuarioDto usuarioActualizado = dtoMapperService.usuarioADto(usuario);
  
            return usuarioActualizado;
        }

        return null;
    }

    public UsuarioDto obtenerPerfilPorJwt(String jwt){
        String correo = jwtUtils.getEmailFromToken(jwt);
        Usuario usuario = this.usuarioRepository.findByCorreo(correo);

        return dtoMapperService.usuarioADto(usuario);
    }


    public UsuarioDto usuarioPorId(int codigoUsuario){
        Usuario usuarioEncontrado = this.usuarioRepository.findById(codigoUsuario).get();

        if (usuarioEncontrado != null){

            UsuarioDto usuarioDto = dtoMapperService.usuarioADto(usuarioEncontrado);
            
            return usuarioDto;
        }

        return null;
    }

    

    public UsuarioDto seguirUsuario(int idUsuarioASeguir, UsuarioDto usuarioSeguidorDto){
        Usuario usuarioASeguir = this.usuarioRepository.findById(idUsuarioASeguir).get();
        Usuario usuarioSeguidor = this.usuarioRepository.findById(usuarioSeguidorDto.getId()).get();

        UsuarioDto usuarioASeguirDto = dtoMapperService.usuarioADto(usuarioASeguir);

        if (this.seguidorRepository.existsById(new SeguidorId(usuarioSeguidor, usuarioASeguir))){
            
            SeguidorId seguidorId = new SeguidorId(usuarioSeguidor, usuarioASeguir);
            this.seguidorRepository.deleteById(seguidorId);

        }else{
            SeguidorId seguidorId = new SeguidorId(usuarioSeguidor, usuarioASeguir);

            Seguidor seguidor = new Seguidor(seguidorId, LocalDate.now());
            this.seguidorRepository.save(seguidor);
        }

        return usuarioASeguirDto;
    }


    public List<UsuarioDto> buscarUsuario(String filtro){

        List<Usuario> usuarios =  this.usuarioRepository.buscarUsuario(filtro);

        if (usuarios != null){
            List<UsuarioDto> usuariosDto = new LinkedList<>();

            for (Usuario usuario : usuarios){

                UsuarioDto usuarioDto = dtoMapperService.usuarioADto(usuario);

                usuariosDto.add(usuarioDto);
            }

            return usuariosDto;
        }

        return null;
    }

}
