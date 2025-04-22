package hn.unah.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import hn.unah.backend.dtos.LikeDto;
import hn.unah.backend.models.Like;
import hn.unah.backend.models.Usuario;
import hn.unah.backend.services.DtoMapperService;
import hn.unah.backend.services.LikeService;
import hn.unah.backend.services.UsuarioService;


@RestController
@RequestMapping("/api/likes")
@CrossOrigin(origins = "http://localhost:5173")
public class LikeController {

    @Autowired
    private UsuarioService usuarioService;

    @Autowired
    private LikeService likeService;

    @Autowired
    private DtoMapperService dtoMapperService;

    @PostMapping("/{codigoPost}/likes")
    public ResponseEntity<LikeDto> darleLikeAPost(@PathVariable int codigoPost, @RequestHeader("Authorization") String jwt) {
        Usuario usuario = usuarioService.obtenerPerfilPorJwt(jwt);
        Like like = likeService.darLikePost(codigoPost, usuario);
        LikeDto likeDto = dtoMapperService.aLikeDto(like, usuario);
        
        return new ResponseEntity<>(likeDto, HttpStatus.CREATED);
    }

    @PostMapping("/{codigoComentario}/likes")
    public ResponseEntity<LikeDto> darleLikeAComentario(@PathVariable int codigoComentario, @RequestHeader("Authorization") String jwt) {
        Usuario usuario = usuarioService.obtenerPerfilPorJwt(jwt);
        Like like = likeService.darLikeComentario(codigoComentario, usuario);
        LikeDto likeDto = dtoMapperService.aLikeDto(like, usuario);
        
        return new ResponseEntity<>(likeDto, HttpStatus.CREATED);
    }

    @PostMapping("/post/{codigoPost}")
    public ResponseEntity<List<LikeDto>> obtenerTodosLosLikesPorPost(@PathVariable int codigoPost, @RequestHeader("Authorization") String jwt) {
        Usuario usuario = usuarioService.obtenerPerfilPorJwt(jwt);
        List<Like> like = likeService.obtenerTodosLikesPorPost(codigoPost);
        List<LikeDto> likesDtos = dtoMapperService.aLikeDtos(like, usuario);
        
        return new ResponseEntity<>(likesDtos, HttpStatus.OK);
    }

    @PostMapping("/post/{codigoComentario}")
    public ResponseEntity<List<LikeDto>> obtenerTodosLosLikesPorComentario(@PathVariable int codigoComentario, @RequestHeader("Authorization") String jwt) {
        Usuario usuario = usuarioService.obtenerPerfilPorJwt(jwt);
        List<Like> like = likeService.obtenerTodosLikesPorComentario(codigoComentario);
        List<LikeDto> likesDtos = dtoMapperService.aLikeDtos(like, usuario);
        
        return new ResponseEntity<>(likesDtos, HttpStatus.OK);
    }
    
    
}
