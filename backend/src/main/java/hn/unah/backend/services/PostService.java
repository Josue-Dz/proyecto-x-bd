package hn.unah.backend.services;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hn.unah.backend.dtos.PostDto;
import hn.unah.backend.dtos.UsuarioDto;
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
    private ComentarioService comentarioService;


    public PostDto crearPost(Post post, Usuario usuarioAutor) {
       
        Post nvoPost = new Post();
        nvoPost.setContenido(post.getContenido());
        nvoPost.setMultimedia(post.getMultimedia());
        nvoPost.setFechaPost(LocalDateTime.now());
        nvoPost.setUsuarioAutor(usuarioAutor);
    
        nvoPost = postRepository.save(nvoPost);

        return aPostDto(nvoPost);

    }

    public List<PostDto> obtenerTodosLosPosts() {

        List<Post> posts = postRepository.findAll();

        return aPostDtos(posts);
    }


    public PostDto obtenerPostPorId(Integer codigoPost) {
        Post post = postRepository.findById(codigoPost).get();
        
        if (post == null) {
            throw new RuntimeException("Post con ID " + codigoPost + " no encontrado");
        }
        
        return aPostDto(post);
    }

    public void borrarPostPorId(int codigoPost, int codigoUsuario){
        //ver si este método es necesario
    }

    public List<PostDto> obtenerPostsPorUsuario(Usuario usuario) {

        // Obtener todos los posts del usuario
        List<Post> listaPost = postRepository.findByUsuarioAutor(usuario);

        return aPostDtos(listaPost);
    }

    public List<PostDto> obtenerPostsLikeadosPorUsuario(Usuario usuario){

        List<Post> posts = postRepository.findPostsLikedByUsuario(usuario.getCodigoUsuario());

        return aPostDtos(posts);
    }

    public PostDto aPostDto(Post post) {

        PostDto postDto = new PostDto();

        postDto.setCodigoPost(post.getCodigoPost());

        UsuarioDto usuarioDto = new UsuarioDto();
        usuarioDto.setId(post.getUsuarioAutor().getCodigoUsuario());
        postDto.setUsuarioAutor(usuarioDto);

        postDto.setContenido(post.getContenido());
        postDto.setMultimedia(post.getMultimedia());
        postDto.setFechaPost(post.getFechaPost());

        return postDto;
    }

    private List<PostDto> aPostDtos(List<Post> posts) {
        List<PostDto> postDtos = new ArrayList<>();

        for (Post post : posts) {
            PostDto postDto = aPostDto(post);
            postDtos.add(postDto);
        }

        return postDtos;
    }

}
