package hn.unah.backend.dtos;

import java.time.LocalDate;
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
public class UsuarioDto {

    private int id;

    private String nombreCompleto; //En el perfil, la aplicación almacena todo lo que el usuario mete como input en el nombre, no lo separa entre nombre y apellido

    private String nombreUsuario;

    private String correo;

    private String contrasenia;

    private String telefono;

    private String biografia;

    private String ubicacion; //En el perfil, se puede escribir cualquier cosa en la ubicaión y solo se almacena como texto. Tampoco se puede buscar usuarios por ubicacion

    private String sitioWeb;

    LocalDate fechaNacimiento;

    LocalDateTime fechaRegistro;

    private String fotoPerfil; //private String porque se almacena como url
   
    private String fotoPortada; //private String porque se almacena como url

    private String informacion;

    private boolean seguido;

    List<UsuarioDto> siguiendo; //personas a las que sigo

    List<UsuarioDto> seguidores; //personas que me siguen

    private boolean isVerified;

    //Faltan campos por definir
}
