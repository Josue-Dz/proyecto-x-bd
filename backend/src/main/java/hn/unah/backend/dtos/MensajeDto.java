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
public class MensajeDto {

    private int codigoMensaje;

    private UsuarioDto usuarioEmisor;

    private UsuarioDto usuarioReceptor;

    private LocalDateTime fechaEnviado;

    private String contenido;

    private String multimedia;
    
}
