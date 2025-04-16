package hn.unah.backend.services;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hn.unah.backend.dtos.ComentarioDto;
import hn.unah.backend.dtos.PostDto;
import hn.unah.backend.models.Comentario;
import hn.unah.backend.models.Comunidad;
import hn.unah.backend.models.Post;
import hn.unah.backend.models.Usuario;
import hn.unah.backend.repositories.ComentarioRepository;
import hn.unah.backend.repositories.ComunidadRepository;
import hn.unah.backend.repositories.PostRepository;
import hn.unah.backend.repositories.UsuarioRepository;

@Service
public class PostService {
    

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private ComunidadRepository comunidadRepository;

    @Autowired
    private ComentarioRepository comentarioRepository;


    public Post crearPost(PostDto nvoPost) {
        Usuario autor = usuarioRepository.findById(nvoPost.getCodigoUsuario())
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
    
        Comunidad comunidad = null;
        if (nvoPost.getCodigoComunidad() != null) {
            comunidad = comunidadRepository.findById(nvoPost.getCodigoComunidad())
                    .orElseThrow(() -> new RuntimeException("Comunidad no encontrada"));
        }
    
        Post nuevoPost = new Post();
        nuevoPost.setUsuarioAutor(autor);
        nuevoPost.setComunidad(comunidad);
        nuevoPost.setContenido(nvoPost.getContenido());
        nuevoPost.setMultimedia(nvoPost.getMultimedia());
        nuevoPost.setFechaPost(LocalDateTime.now());
    
        return postRepository.save(nuevoPost);
    }


    public List<Post> obtenerTodosLosPosts() {
        return postRepository.findAll();
    }


    public Post obtenerPostPorId(Integer codigoPost) {
        Post post = postRepository.findById(codigoPost).orElse(null);
        
        if (post == null) {
            throw new RuntimeException("Post con ID " + codigoPost + " no encontrado");
        }
        
        return post;
    }


    public Comentario contestarPost(ComentarioDto comentarioDto) {
        
        Post post = postRepository.findById(comentarioDto.getCodigoPost())
                .orElseThrow(() -> new RuntimeException("Post no encontrado"));

        
        Usuario usuario = usuarioRepository.findById(comentarioDto.getCodigoUsuarioAutor())
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        
        Comentario comentario = new Comentario();
        comentario.setContenido(comentarioDto.getContenido());
        comentario.setPost(post);
        comentario.setUsuarioAutor(usuario);
        comentario.setFechaComentario(LocalDateTime.now());

        // Guardar el comentario en la base de datos
        return comentarioRepository.save(comentario);
    }


    public List<Post> obtenerPostsPorUsuario(int codigoUsuario) {
        // Buscar al usuario por su código
        Usuario usuario = usuarioRepository.findById(codigoUsuario)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        // Obtener todos los posts del usuario
        return postRepository.findByUsuarioAutor(usuario);
    }

}
