package hn.unah.backend.services;

import java.time.LocalDate;
import java.util.ArrayList;
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

            UsuarioDto usuarioActualizado = usuarioADto(usuario);
  
            return usuarioActualizado;
        }

        return null;
    }

    public UsuarioDto obtenerPerfilPorJwt(String jwt){
        String correo = jwtUtils.getEmailFromToken(jwt);
        Usuario usuario = this.usuarioRepository.findByCorreo(correo);

        return usuarioADto(usuario);
    }


    public UsuarioDto usuarioPorId(int codigoUsuario){
        Usuario usuarioEncontrado = this.usuarioRepository.findById(codigoUsuario).get();

        if (usuarioEncontrado != null){

            UsuarioDto usuarioDto = usuarioADto(usuarioEncontrado);
            
            return usuarioDto;
        }

        return null;
    }

    

    public UsuarioDto seguirUsuario(int idUsuarioASeguir, UsuarioDto usuarioSeguidorDto){
        Usuario usuarioASeguir = this.usuarioRepository.findById(idUsuarioASeguir).get();
        Usuario usuarioSeguidor = this.usuarioRepository.findById(usuarioSeguidorDto.getId()).get();

        UsuarioDto usuarioASeguirDto = usuarioADto(usuarioASeguir);

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

                UsuarioDto usuarioDto = usuarioADto(usuario);

                usuariosDto.add(usuarioDto);
            }

            return usuariosDto;
        }

        return null;
    }


    private UsuarioDto usuarioADto(Usuario usuario){
        UsuarioDto usuarioDto = new UsuarioDto();

        usuarioDto.setId(usuario.getCodigoUsuario());
        usuarioDto.setNombreCompleto(usuario.getNombreCompleto());
        usuarioDto.setNombreUsuario(usuario.getNombreUsuario());
        usuarioDto.setCorreo(usuario.getCorreo());
        //usuarioDto.setTelefono(usuario.getTelefono());
        usuarioDto.setFechaNacimiento(usuario.getFechaNacimiento());
        //usuarioDto.setFechaRegistro(usuario.getFechaRegistro());
        usuarioDto.setFotoPerfil(usuario.getFotoPerfil());
        usuarioDto.setFotoPortada(usuario.getFotoPortada());
        usuarioDto.setBiografia(usuario.getBiografia());
        usuarioDto.setInformacion(usuario.getInformacion());
        usuarioDto.setUbicacion(usuario.getUbicacion());
        //usuarioDto.setSitioWeb(usuario.getSitioWeb());
        usuarioDto.setSiguiendo(usuariosAdtos(usuario.getSiguiendo(), false));
        usuarioDto.setSeguidores(usuariosAdtos(usuario.getSeguidores(), true));


        return usuarioDto;
    }

    

    private List<UsuarioDto> usuariosAdtos(List<Seguidor> seguidores, boolean isSeguidores){
        List<UsuarioDto> listaSeguidores = new ArrayList<>();
        Usuario usuario = new Usuario();
        int codigoUsuario = 0;

            if (isSeguidores){
                for(Seguidor seguidor : seguidores){
                    codigoUsuario = seguidor.getId().getSeguidor().getCodigoUsuario();
                    usuario = this.usuarioRepository.findById(codigoUsuario).get();

                    UsuarioDto usuarioDto = new UsuarioDto();
                    usuarioDto.setId(usuario.getCodigoUsuario());
                    usuarioDto.setNombreCompleto(usuario.getNombreCompleto());
                    usuarioDto.setNombreUsuario(usuario.getNombreUsuario());
                    usuarioDto.setCorreo(usuario.getCorreo());
                    usuarioDto.setFotoPerfil(usuario.getFotoPerfil());

                    listaSeguidores.add(usuarioDto);

                }
            }else{

                for(Seguidor seguidor : seguidores){
                    codigoUsuario = seguidor.getId().getSeguido().getCodigoUsuario();
                    usuario = this.usuarioRepository.findById(codigoUsuario).get();
                    
                    UsuarioDto usuarioDto = new UsuarioDto();
                    usuarioDto.setId(usuario.getCodigoUsuario());
                    usuarioDto.setNombreCompleto(usuario.getNombreCompleto());
                    usuarioDto.setNombreUsuario(usuario.getNombreUsuario());
                    usuarioDto.setCorreo(usuario.getCorreo());
                    usuarioDto.setFotoPerfil(usuario.getFotoPerfil());
    
                    listaSeguidores.add(usuarioDto);

                }
            }
            

        return listaSeguidores;
    }


}
