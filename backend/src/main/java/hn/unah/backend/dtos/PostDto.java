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

public class PostDto {
    
    private int codigoPost;

    private String contenido;

    private String multimedia;

    private LocalDateTime fechaPost;

     private int cantidadLikes;

    private int cantidadComentarios;

    private int cantidadReposteos;

    private Integer codigoUsuario;      // ID del autor del post

    private Integer codigoComunidad; 
}
