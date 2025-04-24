package hn.unah.backend.dtos;

import java.time.LocalDateTime;

import lombok.Data;

@Data
public class ComentarioPostRequest {
    private String contenido;
    private int codigoPost;
    private LocalDateTime fechaComentario;
    private String multimedia;
}
