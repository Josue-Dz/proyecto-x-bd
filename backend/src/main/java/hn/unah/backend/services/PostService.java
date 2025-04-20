package hn.unah.backend.services;

import java.time.LocalDateTime;
import java.util.ArrayList;
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


    public PostDto crearPost(PostDto nvoPost) {
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
    
        nuevoPost = postRepository.save(nuevoPost);

        return aPostDto(nuevoPost);

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


    public ComentarioDto contestarPost(ComentarioDto comentarioDto) {
        
        Post post = postRepository.findById(comentarioDto.getCodigoPost()).get();

        if (post == null) {
            throw new RuntimeException("Post con ID " + comentarioDto.getCodigoPost() + " no encontrado");
        }
        
        Usuario usuario = usuarioRepository.findById(comentarioDto.getCodigoUsuarioAutor()).get();

        if (usuario == null) {
            throw new RuntimeException("Usuario con ID " + comentarioDto.getCodigoUsuarioAutor() + " no encontrado");
        }
        
        Comentario comentario = new Comentario();
        comentario.setContenido(comentarioDto.getContenido());
        comentario.setPost(post);
        comentario.setUsuarioAutor(usuario);
        comentario.setFechaComentario(LocalDateTime.now());

        // Guardar el comentario en la base de datos
        comentario = comentarioRepository.save(comentario);

        return aComentarioDto(comentario);
    }


    public List<PostDto> obtenerPostsPorUsuario(int codigoUsuario) {
        // Buscar al usuario por su código
        Usuario usuario = usuarioRepository.findById(codigoUsuario).get();

        if (usuario == null) {
            throw new RuntimeException("Usuario con ID " + codigoUsuario + " no encontrado");
        }

        // Obtener todos los posts del usuario
        List<Post> listaPost = postRepository.findByUsuarioAutor(usuario);

        return aPostDtos(listaPost);
    }

    private PostDto aPostDto(Post post) {

        PostDto postDto = new PostDto();
    

        postDto.setCodigoPost(post.getCodigoPost());
        postDto.setCodigoUsuario(post.getUsuarioAutor().getCodigoUsuario());
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

    public ComentarioDto aComentarioDto(Comentario comentario){
        ComentarioDto comentarioDto = new ComentarioDto();
        comentarioDto.setCodigoPost(comentario.getPost().getCodigoPost());
        comentarioDto.setCodigoUsuarioAutor(comentario.getUsuarioAutor().getCodigoUsuario());
        comentarioDto.setContenido(comentario.getContenido());

        return comentarioDto;
    }
}
