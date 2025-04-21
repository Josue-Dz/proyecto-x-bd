package hn.unah.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import hn.unah.backend.dtos.ComentarioDto;
import hn.unah.backend.dtos.PostDto;
import hn.unah.backend.services.PostService;
import hn.unah.backend.services.UsuarioService;

@RestController
@RequestMapping("/api/posts")
@CrossOrigin(origins = "http://localhost:5173")
public class PostController {

    @Autowired
    private PostService postService;

    @Autowired
    private UsuarioService usuarioService;

    @GetMapping("/crearPost")
    public ResponseEntity<PostDto> crearPost(@RequestBody PostDto nvoPost) {
        
        //PostDto postDto = this.postService.crearPost(nvoPost);
        //return ResponseEntity.ok(postDto);
        return null;
    }

    @GetMapping("/obtenerTodosLosPost")
    public ResponseEntity<List<PostDto>> obtenerTodosLosPost(){
        
        List<PostDto> postsDtos = this.postService.obtenerTodosLosPosts();
        return ResponseEntity.ok(postsDtos);
    }

    @GetMapping("/obtenerPostPorId")
    public ResponseEntity<PostDto> obtenerPostPorId(int idPost){
        
        PostDto postDto = this.postService.obtenerPostPorId(idPost);
        return ResponseEntity.ok(postDto);
    }

    @GetMapping("/contestarPost")
    public ResponseEntity<ComentarioDto> contestarPost(@RequestBody ComentarioDto nvoComentario){
        
        //ComentarioDto comentarioDto = this.postService.contestarPost(nvoComentario);
        //return ResponseEntity.ok(comentarioDto);
        return null;
    }

    @GetMapping("/obtenerPostPorUsuario/{id}")
    public ResponseEntity<List<PostDto>> obtenerPostPorUsuario(@PathVariable(name = "id")int id){
        
        //List<PostDto> comentariosDtos = this.postService.obtenerPostsPorUsuario(id);
        //return ResponseEntity.ok(comentariosDtos);
        return null;
    }

}
