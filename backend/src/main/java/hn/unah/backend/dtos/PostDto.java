package hn.unah.backend.dtos;

import java.time.LocalDateTime;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter

public class PostDto {
    
    private int codigoPost;

    private String contenido;

    private String multimedia;

    private LocalDateTime fechaPost;

    private UsuarioDto usuarioAutor;

    private List<LikeDto> likes;

    private List<ComentarioDto> comentarios;

    private List<RepostDto> reposteos;

    private int cantidadLikes;

    private int cantidadComentarios;

    private int cantidadReposteos;

    private Integer codigoComunidad; 

    private boolean isLiked;

    private boolean isRepost;
}
