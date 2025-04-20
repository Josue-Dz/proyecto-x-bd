package hn.unah.backend.dtos;

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

    private PostDto postDto;

    private UsuarioDto usuarioAutorDto;

    private List<RepostDto> reposteos;
}