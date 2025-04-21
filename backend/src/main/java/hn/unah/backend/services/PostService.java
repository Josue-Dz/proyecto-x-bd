package hn.unah.backend.services;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    @Autowired
    private DtoMapperService dtoMapperService;

    public Post crearPost(Post post, Usuario usuarioAutor) {
       
        Post nvoPost = new Post();
        nvoPost.setContenido(post.getContenido());
        nvoPost.setMultimedia(post.getMultimedia());
        nvoPost.setFechaPost(LocalDateTime.now());
        nvoPost.setUsuarioAutor(usuarioAutor);
    
        nvoPost = postRepository.save(nvoPost);

        return nvoPost;

    }

    public List<Post> obtenerTodosLosPosts() {

        List<Post> posts = postRepository.findAll();

        return posts;
    }


    public Post obtenerPostPorId(Integer codigoPost) {
        Post post = postRepository.findById(codigoPost).get();
        
        if (post == null) {
            throw new RuntimeException("Post con ID " + codigoPost + " no encontrado");
        }
        
        return post;
    }

    public void borrarPostPorId(int codigoPost, int codigoUsuario){
        //ver si este método es necesario
    }

    public List<Post> obtenerPostsPorUsuario(Usuario usuario) {

        // Obtener todos los posts del usuario
        List<Post> listaPost = postRepository.findByUsuarioAutor(usuario);

        return listaPost;
    }

    public List<Post> obtenerPostsLikeadosPorUsuario(Usuario usuario){

        List<Post> posts = postRepository.findPostsLikedByUsuario(usuario.getCodigoUsuario());

        return posts;
    }

}
