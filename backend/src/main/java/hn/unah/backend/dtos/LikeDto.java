package hn.unah.backend.dtos;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class LikeDto {

    private int codigoLike;

    private LocalDateTime fechaLike;

    private PostDto post;

    private ComentarioDto comentario;

    private UsuarioDto usuario;
    
}
