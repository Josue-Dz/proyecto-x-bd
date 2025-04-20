package hn.unah.backend.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hn.unah.backend.dtos.ComentarioDto;
import hn.unah.backend.dtos.LikeDto;
import hn.unah.backend.dtos.PostDto;
import hn.unah.backend.dtos.UsuarioDto;
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
    private PostService postService;

    @Autowired
    private ComentarioService comentarioService;

    @Autowired
    private UsuarioService usuarioService;

    public LikeDto darLikePost(int codigoPost, Usuario usuarioQueDaraLike){
        Like like = likeRepository.findByUsuarioCodigoUsuarioAndPostCodigoPost(usuarioQueDaraLike.getCodigoUsuario(), codigoPost);

        if(like != null){
            likeRepository.deleteById(like.getCodigoLike());
            LikeDto likeDto = aLikeDto(like);
            return likeDto;
        }

        Post postLike = postRepository.findById(codigoPost).get();
        Like nvoLike = new Like();
        nvoLike.setPost(postLike);
        nvoLike.setUsuario(usuarioQueDaraLike);
        Like guardado = likeRepository.save(nvoLike);

        postLike.getLikes().add(nvoLike);
        postRepository.save(postLike);
        LikeDto likeDto = aLikeDto(guardado);

        return likeDto;
    }

    public LikeDto darLikeComentario(int codigoComentario, Usuario usuarioQueDaraLike){
        Like like = likeRepository.findByUsuarioCodigoUsuarioAndComentarioCodigoComentario(usuarioQueDaraLike.getCodigoUsuario(), codigoComentario);

        if(like != null){
            likeRepository.deleteById(like.getCodigoLike());
            LikeDto likeDto = aLikeDto(like);
            return likeDto;
        }

        Comentario comentarioLike = comentarioRepository.findById(codigoComentario).get();
        Like nvoLike = new Like();
        nvoLike.setComentario(comentarioLike);
        nvoLike.setUsuario(usuarioQueDaraLike);
        Like guardado = likeRepository.save(nvoLike);

        comentarioLike.getLikes().add(nvoLike);
        comentarioRepository.save(comentarioLike);
        LikeDto likeDto = aLikeDto(guardado);

        return likeDto;
    }

    public List<LikeDto> obtenerTodosLikesPorPost(int codigoPost){
        Post post = postRepository.findById(codigoPost).get();

        if(post != null){
            List<Like> likes = likeRepository.findByPostCodigoPost(codigoPost);
            return aLikeDtos(likes);
        }

        return null;
    }

    public List<LikeDto> obtenerTodosLikesPorComentario(int codigoComentario){
        Comentario comentario = comentarioRepository.findById(codigoComentario).get();

        if(comentario != null){
            List<Like> likes = likeRepository.findByComentarioCodigoComentario(codigoComentario);
            return aLikeDtos(likes);
        }

        return null;
    }

    public LikeDto aLikeDto(Like like){
        LikeDto likeDto = new LikeDto();
        likeDto.setCodigoLike(like.getCodigoLike());
        likeDto.setFechaLike(like.getFechaLike());

        if(like.getComentario().equals(null)){
            PostDto postDto = postService.aPostDto(like.getPost());
            likeDto.setPost(postDto);
        }else{
            ComentarioDto comentarioDto = comentarioService.aComentarioDto(like.getComentario());
            likeDto.setComentario(comentarioDto); 
        }

        UsuarioDto usuarioDto = usuarioService.usuarioADto(like.getUsuario());
        likeDto.setUsuario(usuarioDto);

        return likeDto;
    }

    public List<LikeDto> aLikeDtos(List<Like> likes){

        List<LikeDto> likeDtos = new ArrayList<>();

        for(Like like: likes){
            LikeDto likeDto = aLikeDto(like);
            likeDtos.add(likeDto);
        }

        return likeDtos;
    }

    
}
