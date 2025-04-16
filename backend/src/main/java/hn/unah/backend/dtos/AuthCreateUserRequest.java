package hn.unah.backend.dtos;

import java.time.LocalDate;

public record AuthCreateUserRequest(String nombreUsuario,
                            String correo, String contrasenia, LocalDate fechaNacimiento) {

}
