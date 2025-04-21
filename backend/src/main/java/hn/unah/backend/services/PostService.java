package hn.unah.backend.services;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hn.unah.backend.dtos.PostDto;
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

    public PostDto crearPost(Post post, Usuario usuarioAutor) {
       
        Post nvoPost = new Post();
        nvoPost.setContenido(post.getContenido());
        nvoPost.setMultimedia(post.getMultimedia());
        nvoPost.setFechaPost(LocalDateTime.now());
        nvoPost.setUsuarioAutor(usuarioAutor);
    
        nvoPost = postRepository.save(nvoPost);

        return dtoMapperService.aPostDto(nvoPost);

    }

    public List<PostDto> obtenerTodosLosPosts() {

        List<Post> posts = postRepository.findAll();

        return dtoMapperService.aPostDtos(posts);
    }


    public PostDto obtenerPostPorId(Integer codigoPost) {
        Post post = postRepository.findById(codigoPost).get();
        
        if (post == null) {
            throw new RuntimeException("Post con ID " + codigoPost + " no encontrado");
        }
        
        return dtoMapperService.aPostDto(post);
    }

    public void borrarPostPorId(int codigoPost, int codigoUsuario){
        //ver si este método es necesario
    }

    public List<PostDto> obtenerPostsPorUsuario(Usuario usuario) {

        // Obtener todos los posts del usuario
        List<Post> listaPost = postRepository.findByUsuarioAutor(usuario);

        return dtoMapperService.aPostDtos(listaPost);
    }

    public List<PostDto> obtenerPostsLikeadosPorUsuario(Usuario usuario){

        List<Post> posts = postRepository.findPostsLikedByUsuario(usuario.getCodigoUsuario());

        return dtoMapperService.aPostDtos(posts);
    }

}
