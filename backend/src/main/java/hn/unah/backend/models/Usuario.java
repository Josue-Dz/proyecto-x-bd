package hn.unah.backend.models;

import java.time.LocalDate;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name = "usuarios")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "codigo_usuario")
    private int codigoUsuario;

    //private String nombre;

    //private String apellido;

    @Column(name ="username")
    private String nombreUsuario; //En el perfil, la aplicación almacena todo lo que el usuario mete como input en el nombre, no lo separa entre nombre y apellido

    private String correo;

    private String contrasenia;

    //private int telefono;

    //private String biografia;

    //private String ubicacion; //En el perfil, se puede escribir cualquier cosa en la ubicaión y solo se almacena como texto. Tampoco se puede buscar usuarios por ubicacion

    @Column(name = "fecha_nacimiento")
    private LocalDate fechaNacimiento;

    @Column(name = "fecha_registro")
    private LocalDate fechaRegistro;

    //@Column(name = "foto_perfil")
    //private String fotoPerfil; //String porque se almacena como url

    //@Column(name = "foto_portada")
    //private String fotoPortada; //String porque se almacena como url

    private String informacion;

    @JsonIgnore
    @OneToMany(mappedBy = "usuarioAutor", cascade = CascadeType.ALL, orphanRemoval = true) //Un usuario puede tener muchos posts
    private List<Post> posts;

    @OneToMany(mappedBy = "seguidor", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Seguidor> siguiendo; //Un usuario puede seguir a muchos usuarios

    @OneToMany(mappedBy = "seguido", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Seguidor> seguidores; //Un usuario puede tener muchos seguidores

    @OneToMany(mappedBy = "usuario", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Like> likes;
    //Faltan campos por definir

}
