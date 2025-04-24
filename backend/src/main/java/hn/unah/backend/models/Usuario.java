package hn.unah.backend.models;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
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

    @Column(name ="username")
    private String nombreUsuario; //En el perfil, la aplicación almacena todo lo que el usuario mete como input en el nombre, no lo separa entre nombre y apellido

    @Column(name = "nombre_usuario")
    private String nombreCompleto;

    private String correo;

    @Column(name = "contrasena")
    private String contrasenia;

    private String telefono;

    private String biografia;

    private String ubicacion; //En el perfil, se puede escribir cualquier cosa en la ubicaión y solo se almacena como texto. Tampoco se puede buscar usuarios por ubicacion

    private String sitioWeb;

    @Column(name = "fecha_nacimiento")
    private LocalDate fechaNacimiento;

    @Column(name = "fecha_registro")
    private LocalDateTime fechaRegistro;

    @Column(name = "foto_perfil")
    private String fotoPerfil; //String porque se almacena como url

    @Column(name = "foto_portada")
    private String fotoPortada; //String porque se almacena como url

    private String informacion;

    // private boolean req_usuario; //true si el usuario es un usuario registrado, false si es un usuario no registrado

    // private boolean seguido;

    @JsonIgnore
    @OneToMany(mappedBy = "usuarioAutor", cascade = CascadeType.ALL, orphanRemoval = true) //Un usuario puede tener muchos posts
    private List<Post> posts;

    @OneToMany(mappedBy = "id.seguidor", orphanRemoval = true)
    private List<Seguidor> siguiendo = new ArrayList<>(); //Un usuario puede seguir a muchos usuarios

    @OneToMany(mappedBy = "id.seguido", orphanRemoval = true)
    private List<Seguidor> seguidores = new ArrayList<>(); //Un usuario puede tener muchos seguidores

    @OneToMany(mappedBy = "usuario", orphanRemoval = true)
    private List<Like> likes = new ArrayList<>();

    @OneToMany(mappedBy = "usuario", orphanRemoval = true)
    private List<Repost> reposteos = new ArrayList<>();

    @OneToMany(mappedBy = "usuarioEmisor", cascade = CascadeType.ALL)
    private List<Mensaje> mensajesEnviados = new ArrayList<>();

    @OneToMany(mappedBy = "usuarioReceptor", cascade = CascadeType.ALL)
    private List<Mensaje> mensajesRecibidos = new ArrayList<>();

    //agregar private List<Twit> twits;  // y su relacion
    //Faltan campos por definir

}
