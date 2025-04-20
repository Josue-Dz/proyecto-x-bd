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
public class RepostDto {

    private int codigoReposteo;

    private LocalDateTime fechaReposteo;

    private PostDto post;

    private ComentarioDto comentario;

    private UsuarioDto usuario;
    
}
