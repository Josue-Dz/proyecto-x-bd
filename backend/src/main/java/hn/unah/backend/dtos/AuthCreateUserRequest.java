package hn.unah.backend.dtos;

import java.time.LocalDate;

public record AuthCreateUserRequest(String nombreCompleto,
                            String correo, String password, LocalDate fechaNacimiento) {

}
