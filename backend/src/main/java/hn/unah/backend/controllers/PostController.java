package hn.unah.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import hn.unah.backend.dtos.*;
import hn.unah.backend.models.*;
import hn.unah.backend.services.*;

@RestController
@RequestMapping("/api/posts")
@CrossOrigin(origins = "http://localhost:5173")
public class PostController {

    @Autowired
    private PostService postService;

    @Autowired
    private UsuarioService usuarioService;

    @Autowired
    private ComentarioService comentarioService;

    @Autowired
    private RepostService repostService;

    @Autowired
    private DtoMapperService dtoMapperService;

    @PostMapping("/crearPost")
    public ResponseEntity<PostDto> crearPost(@RequestBody Post nvoPost, @RequestHeader("Authorization") String jwt) {
        Usuario usuario = usuarioService.obtenerPerfilPorJwt(jwt);
        Post post = postService.crearPost(nvoPost, usuario);
        PostDto postDto = dtoMapperService.aPostDto(post, usuario);
        
        return new ResponseEntity<>(postDto, HttpStatus.CREATED);
    }

    @PostMapping("/contestarPost")
    public ResponseEntity<ComentarioDto> repostearPost(@RequestBody Comentario nvoComentario, @RequestHeader("Authorization") String jwt) {
        Usuario usuario = usuarioService.obtenerPerfilPorJwt(jwt);
        Comentario comentario = comentarioService.contestarPost(nvoComentario, usuario);
        ComentarioDto comentarioDto = dtoMapperService.aComentarioDto(comentario, usuario);
        
        return new ResponseEntity<>(comentarioDto, HttpStatus.CREATED);
    }

    @PutMapping("/{codigoPost}/repostearPost")
    public ResponseEntity<RepostDto> respostearPost(@PathVariable int codigoPost, @RequestHeader("Authorization") String jwt) {
        Usuario usuario = usuarioService.obtenerPerfilPorJwt(jwt);
        Repost repost = repostService.darRepostAPost(codigoPost, usuario);
        RepostDto repostDto = dtoMapperService.aRepostDto(repost);
        
        return new ResponseEntity<>(repostDto, HttpStatus.OK);
    }

    @PutMapping("/{codigoComentario}/repostearComentario")
    public ResponseEntity<RepostDto> respostearComentario(@PathVariable int codigoComentario, @RequestHeader("Authorization") String jwt) {
        Usuario usuario = usuarioService.obtenerPerfilPorJwt(jwt);
        Repost repost = repostService.darRepostAComentario(codigoComentario, usuario);
        RepostDto repostDto = dtoMapperService.aRepostDto(repost);
        
        return new ResponseEntity<>(repostDto, HttpStatus.OK);
    }

    @GetMapping("/{codigoPost}")
    public ResponseEntity<PostDto> obtenerPostPorId(@PathVariable int codigoPost, @RequestHeader("Authorization") String jwt){
        Usuario usuario = usuarioService.obtenerPerfilPorJwt(jwt);
        Post post = postService.obtenerPostPorId(codigoPost);
        PostDto postDto = dtoMapperService.aPostDto(post, usuario);

        return new ResponseEntity<>(postDto, HttpStatus.OK);
    }

    @GetMapping("/") //Obtener todos los posts
    public ResponseEntity<List<PostDto>> obtenerTodosLosPost(@RequestHeader("Authorization") String jwt){
        Usuario usuario = usuarioService.obtenerPerfilPorJwt(jwt);
        List<Post> posts = postService.obtenerTodosLosPosts();
        List<PostDto> postsDtos = dtoMapperService.aPostDtos(posts, usuario);

        return new ResponseEntity<>(postsDtos, HttpStatus.OK);
    }


    @GetMapping("/usuario/{codigoUsuario}")
    public ResponseEntity<List<PostDto>> obtenerPostsPorUsuario(@PathVariable int codigoUsuario, @RequestHeader("Authorization") String jwt){
        Usuario usuario = usuarioService.obtenerPerfilPorJwt(jwt);
        List<Post> postsDeUsuario = postService.obtenerPostsPorUsuario(usuario);
        List<PostDto> postsDtos = dtoMapperService.aPostDtos(postsDeUsuario, usuario);

        return new ResponseEntity<>(postsDtos, HttpStatus.OK);
    }

    @GetMapping("/usuario/{codigoUsuario}/likes")
    public ResponseEntity<List<PostDto>> obtenerPostsLikeadosPorUsuario(@PathVariable int codigoUsuario, @RequestHeader("Authorization") String jwt){
        Usuario usuario = usuarioService.obtenerPerfilPorJwt(jwt);
        List<Post> postsDeUsuario = postService.obtenerPostsLikeadosPorUsuario(usuario);
        List<PostDto> postsDtos = dtoMapperService.aPostDtos(postsDeUsuario, usuario);

        return new ResponseEntity<>(postsDtos, HttpStatus.OK);
    }

}
