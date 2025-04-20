package hn.unah.backend.dtos;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class SeguidorDto {

    private UsuarioDto seguidor;

    private UsuarioDto seguido;

    private LocalDate fechaSeguido;


}
