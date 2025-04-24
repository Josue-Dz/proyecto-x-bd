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
public class ComentarioDto {

    private int codigoComentario;

    private String contenido;

    private LocalDateTime fechaComentario;

    private PostDto postDto;

    private UsuarioDto usuarioAutorDto;

    private ComentarioDto comentarioSuperior; 

    private List<RepostDto> reposteos;

    private List<LikeDto> likes;

    private List<ComentarioDto> comentarios;
}