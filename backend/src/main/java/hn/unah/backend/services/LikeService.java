package hn.unah.backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hn.unah.backend.dtos.LikeDto;
import hn.unah.backend.models.Comentario;
import hn.unah.backend.models.Like;
import hn.unah.backend.models.Post;
import hn.unah.backend.models.Usuario;
import hn.unah.backend.repositories.ComentarioRepository;
import hn.unah.backend.repositories.LikeRepository;
import hn.unah.backend.repositories.PostRepository;
import hn.unah.backend.repositories.UsuarioRepository;

@Service
public class LikeService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private LikeRepository likeRepository;

    @Autowired
    private ComentarioRepository comentarioRepository;

    @Autowired
    private DtoMapperService dtoMapperService;

    public LikeDto darLikePost(int codigoPost, Usuario usuarioQueDaraLike){
        Like like = likeRepository.findByUsuarioCodigoUsuarioAndPostCodigoPost(usuarioQueDaraLike.getCodigoUsuario(), codigoPost);

        if(like != null){
            likeRepository.deleteById(like.getCodigoLike());
            LikeDto likeDto = dtoMapperService.aLikeDto(like);
            return likeDto;
        }

        Post postLike = postRepository.findById(codigoPost).get();
        Like nvoLike = new Like();
        nvoLike.setPost(postLike);
        nvoLike.setUsuario(usuarioQueDaraLike);
        Like guardado = likeRepository.save(nvoLike);

        postLike.getLikes().add(nvoLike);
        postRepository.save(postLike);
        LikeDto likeDto = dtoMapperService.aLikeDto(guardado);

        return likeDto;
    }

    public LikeDto darLikeComentario(int codigoComentario, Usuario usuarioQueDaraLike){
        Like like = likeRepository.findByUsuarioCodigoUsuarioAndComentarioCodigoComentario(usuarioQueDaraLike.getCodigoUsuario(), codigoComentario);

        if(like != null){
            likeRepository.deleteById(like.getCodigoLike());
            LikeDto likeDto = dtoMapperService.aLikeDto(like);
            return likeDto;
        }

        Comentario comentarioLike = comentarioRepository.findById(codigoComentario).get();
        Like nvoLike = new Like();
        nvoLike.setComentario(comentarioLike);
        nvoLike.setUsuario(usuarioQueDaraLike);
        Like guardado = likeRepository.save(nvoLike);

        comentarioLike.getLikes().add(nvoLike);
        comentarioRepository.save(comentarioLike);
        LikeDto likeDto = dtoMapperService.aLikeDto(guardado);

        return likeDto;
    }

    public List<LikeDto> obtenerTodosLikesPorPost(int codigoPost){
        Post post = postRepository.findById(codigoPost).get();

        if(post != null){
            List<Like> likes = likeRepository.findByPostCodigoPost(codigoPost);
            return dtoMapperService.aLikeDtos(likes);
        }

        return null;
    }

    public List<LikeDto> obtenerTodosLikesPorComentario(int codigoComentario){
        Comentario comentario = comentarioRepository.findById(codigoComentario).get();

        if(comentario != null){
            List<Like> likes = likeRepository.findByComentarioCodigoComentario(codigoComentario);
            return dtoMapperService.aLikeDtos(likes);
        }

        return null;
    }
    
}
