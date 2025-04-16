package hn.unah.backend.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ComentarioDto {

    private String contenido;

    private int codigoPost;

    private int codigoUsuarioAutor;
}