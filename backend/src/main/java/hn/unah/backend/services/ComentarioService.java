package hn.unah.backend.services;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hn.unah.backend.dtos.ComentarioDto;
import hn.unah.backend.dtos.PostDto;
import hn.unah.backend.dtos.UsuarioDto;
import hn.unah.backend.models.Comentario;
import hn.unah.backend.models.Post;
import hn.unah.backend.models.Usuario;
import hn.unah.backend.repositories.ComentarioRepository;
import hn.unah.backend.repositories.ComunidadRepository;
import hn.unah.backend.repositories.PostRepository;
import hn.unah.backend.repositories.UsuarioRepository;

@Service
public class ComentarioService {

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private ComunidadRepository comunidadRepository;

    @Autowired
    private ComentarioRepository comentarioRepository;

    public ComentarioDto contestarPost(Comentario comentario, Usuario usuarioAutor) {
        
    Post post = postRepository.findById(comentario.getPost().getCodigoPost()).get();

    if (post == null) {
        throw new RuntimeException("Post con ID " + comentario.getPost().getCodigoPost() + " no encontrado");
    }
        
    Comentario nvoComentario = new Comentario();
    nvoComentario.setContenido(comentario.getContenido());
    nvoComentario.setPost(post);
    nvoComentario.setUsuarioAutor(usuarioAutor);
    nvoComentario.setFechaComentario(LocalDateTime.now());

    // Guardar el comentario en la base de datos
    nvoComentario = comentarioRepository.save(nvoComentario);

    return aComentarioDto(nvoComentario);
    }

    public ComentarioDto aComentarioDto(Comentario comentario){
        ComentarioDto comentarioDto = new ComentarioDto();

        comentarioDto.setCodigoComentario(comentario.getCodigoComentario());
        comentarioDto.setContenido(comentario.getContenido());

        PostDto postDto = new PostDto();
        postDto.setCodigoPost(comentario.getPost().getCodigoPost());
        comentarioDto.setPostDto(postDto);

        UsuarioDto autorDto = new UsuarioDto();
        autorDto.setId(comentario.getUsuarioAutor().getCodigoUsuario());
        comentarioDto.setUsuarioAutorDto(autorDto);

        return comentarioDto;
    }
    
}
