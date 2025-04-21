package hn.unah.backend.services;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hn.unah.backend.dtos.RepostDto;
import hn.unah.backend.models.Comentario;
import hn.unah.backend.models.Post;
import hn.unah.backend.models.Repost;
import hn.unah.backend.models.Usuario;
import hn.unah.backend.repositories.ComentarioRepository;
import hn.unah.backend.repositories.ComunidadRepository;
import hn.unah.backend.repositories.PostRepository;
import hn.unah.backend.repositories.RepostRepository;
import hn.unah.backend.repositories.UsuarioRepository;

@Service
public class RepostService {

    @Autowired
    private RepostRepository repostRepository;

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

    public RepostDto darRepostAPost(int codigoPost, Usuario usuarioRepostea){
        Post post = postRepository.findById(codigoPost).get();

        if(post != null){
            Repost repost = new Repost();
            repost.setFechaReposteo(LocalDateTime.now());
            repost.setPost(post);
            repost.setUsuario(usuarioRepostea);
            repost = repostRepository.save(repost);

            post.getReposteos().add(repost);
            postRepository.save(post);

            return dtoMapperService.aRepostDto(repost);
        }

        return null;
    }

    public RepostDto darRepostAComentario(int codigoComentario, Usuario usuarioRepostea){
        Comentario comentario = comentarioRepository.findById(codigoComentario).get();

        if(comentario != null){
            Repost repost = new Repost();
            repost.setFechaReposteo(LocalDateTime.now());
            repost.setComentario(comentario);;
            repost.setUsuario(usuarioRepostea);
            repost = repostRepository.save(repost);

            comentario.getReposteos().add(repost);
            comentarioRepository.save(comentario);

            return dtoMapperService.aRepostDto(repost);
        }

        return null;
    }
    
    public List<RepostDto> obtenerReposteosPorUsuario(int codigoUsuario){
        Usuario usuario = usuarioRepository.findById(codigoUsuario).get();

        if(usuario != null){
            List<Repost> reposteos = usuario.getReposteos();
            return dtoMapperService.aRepostDtos(reposteos);
        }

        return null;
    }

}
