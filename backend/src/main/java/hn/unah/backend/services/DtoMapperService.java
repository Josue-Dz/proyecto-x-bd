package hn.unah.backend.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hn.unah.backend.dtos.*;
import hn.unah.backend.models.*;
import hn.unah.backend.repositories.UsuarioRepository;

@Service
public class DtoMapperService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public PostDto aPostDto(Post post, Usuario usuario) {
        UsuarioDto usuarioDto = usuarioADto(post.getUsuarioAutor());

        PostDto postDto = new PostDto();
        postDto.setCodigoPost(post.getCodigoPost());
        postDto.setUsuarioAutor(usuarioDto);
        postDto.setContenido(post.getContenido());
        postDto.setMultimedia(post.getMultimedia());
        postDto.setFechaPost(post.getFechaPost());
        postDto.setCantidadLikes(post.getLikes().size());
        postDto.setCantidadComentarios(post.getComentarios().size());
        postDto.setCantidadReposteos(post.getReposteos().size());

        return postDto;
    }

    public List<PostDto> aPostDtos(List<Post> posts, Usuario usuario) {
        List<PostDto> postDtos = new ArrayList<>();

        for (Post post : posts) {
            PostDto postDto = aPostDto(post, usuario);
            postDtos.add(postDto);
        }

        return postDtos;
    }

    public ComentarioDto aComentarioDto(Comentario comentario, Usuario usuario) {

        ComentarioDto comentarioDto = new ComentarioDto();
        comentarioDto.setCodigoComentario(comentario.getCodigoComentario());
        comentarioDto.setContenido(comentario.getContenido());
        comentarioDto.setPostDto(aPostDto(comentario.getPost(), usuario));
        comentarioDto.setUsuarioAutorDto(usuarioADto(comentario.getUsuarioAutor()));
        comentarioDto.setReposteos(aRepostDtos(comentario.getReposteos()));
        comentarioDto.setLikes(aLikeDtos(comentario.getLikes(), usuario));
        comentarioDto.setComentarios(aComentariosDto(comentario.getRespuestas(), usuario));

        if (comentario.getComentarioSuperior() != null) {
            comentarioDto.setComentarioSuperior(aComentarioDto(comentario.getComentarioSuperior(), comentario.getComentarioSuperior().getUsuarioAutor()));
        }

        return comentarioDto;
    }

    public List<ComentarioDto> aComentariosDto(List<Comentario> comentarios, Usuario usuario) {
        List<ComentarioDto> comentarioDtos = new ArrayList<>();
        for (Comentario comentario : comentarios) {
            comentarioDtos.add(aComentarioDto(comentario, usuario));
        }
        return comentarioDtos;
    }

    public LikeDto aLikeDto(Like like, Usuario usuario){
        LikeDto likeDto = new LikeDto();
        likeDto.setCodigoLike(like.getCodigoLike());
        likeDto.setFechaLike(like.getFechaLike());

        if(like.getComentario() == null){
            PostDto postDto = aPostDto(like.getPost(), usuario);
            likeDto.setPost(postDto);
        }else{
            ComentarioDto comentarioDto = aComentarioDto(like.getComentario(), like.getComentario().getUsuarioAutor());
            likeDto.setComentario(comentarioDto); 
        }

        UsuarioDto usuarioDto = usuarioADto(like.getUsuario());
        likeDto.setUsuario(usuarioDto);

        return likeDto;
    }

    public List<LikeDto> aLikeDtos(List<Like> likes, Usuario usuario){

        List<LikeDto> likeDtos = new ArrayList<>();

        for(Like like: likes){
            LikeDto likeDto = aLikeDto(like, usuario);
            likeDtos.add(likeDto);
        }

        return likeDtos;
    }

    public MensajeDto aMensajeDto(Mensaje mensaje){
        MensajeDto mensajeDto = new MensajeDto();
        mensajeDto.setCodigoMensaje(mensaje.getCodigoMensaje());
        mensajeDto.setFechaEnviado(mensaje.getFechaEnviado());
        mensajeDto.setContenido(mensaje.getContenido());
        mensajeDto.setMultimedia(mensaje.getMultimedia());

        UsuarioDto usuarioEmisor = new UsuarioDto();
        usuarioEmisor.setId(mensaje.getUsuarioEmisor().getCodigoUsuario());
        mensajeDto.setUsuarioEmisor(usuarioEmisor);

        UsuarioDto usuarioReceptor = new UsuarioDto();
        usuarioReceptor.setId(mensaje.getUsuarioReceptor().getCodigoUsuario());
        mensajeDto.setUsuarioReceptor(usuarioReceptor);

        return mensajeDto;
    }

    public List<MensajeDto> aMensajesDtos(List<Mensaje> mensajes){
        List<MensajeDto> mensajeDtos = new ArrayList<>();

        for (Mensaje mensaje : mensajes) {
            MensajeDto mensajeDto = aMensajeDto(mensaje);
            mensajeDtos.add(mensajeDto);
        }

        return mensajeDtos;

    }

    public RepostDto aRepostDto(Repost repost){
        RepostDto repostDto = new RepostDto();

        repostDto.setCodigoReposteo(repost.getCodigoReposteo());
        repostDto.setFechaReposteo(repost.getFechaReposteo());

        if(repost.getPost() == null){
            ComentarioDto comentarioDto = new ComentarioDto();
            comentarioDto.setCodigoComentario(repost.getComentario().getCodigoComentario());
            repostDto.setComentario(comentarioDto);
        }else{
            PostDto postDto = new PostDto();
            postDto.setCodigoPost(repost.getPost().getCodigoPost());
            repostDto.setPost(postDto);
        }

        UsuarioDto usuarioDto = new UsuarioDto();
        usuarioDto.setId(repost.getUsuario().getCodigoUsuario());
        repostDto.setUsuario(usuarioDto);

        return repostDto;
    }

    public List<RepostDto> aRepostDtos(List<Repost> reposts){
        List<RepostDto> repostDtos = new ArrayList<>();
        
        for (Repost repost: reposts) {
            RepostDto repostDto = aRepostDto(repost);
            repostDtos.add(repostDto);  
        }

        return repostDtos;
    }

    public UsuarioDto usuarioADto(Usuario usuario){
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
