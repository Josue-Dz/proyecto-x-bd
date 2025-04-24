package hn.unah.backend.services;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hn.unah.backend.dtos.ComentarioPostRequest;
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

    @Autowired
    private DtoMapperService dtoMapperService;

    public Comentario contestarPost(ComentarioPostRequest comentario, Usuario usuarioAutor) {
        
        Post post = postRepository.findById(comentario.getCodigoPost()).get();

        if (post == null) {
            throw new RuntimeException("Post con ID " + comentario.getCodigoPost() + " no encontrado");
        }
            
        Comentario nvoComentario = new Comentario();
        nvoComentario.setContenido(comentario.getContenido());
        nvoComentario.setPost(post);
        nvoComentario.setUsuarioAutor(usuarioAutor);
        nvoComentario.setFechaComentario(LocalDateTime.now());

        // Guardar el comentario en la base de datos
        nvoComentario = comentarioRepository.save(nvoComentario);
        post.getComentarios().add(nvoComentario);
        postRepository.save(post);

        return nvoComentario;
    }
    
}
