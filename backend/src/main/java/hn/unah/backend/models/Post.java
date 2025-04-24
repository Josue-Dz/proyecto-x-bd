package hn.unah.backend.models;

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
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
@Table(name = "posts")
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "codigo_post")
    private int codigoPost;

    @Column(name ="contenido_post")
    private String contenido;

    @Column(name ="multimedia_post")
    private String multimedia; //String para que reciba un url

    @Column(name = "fecha_post")
    private LocalDateTime fechaPost;

    @ManyToOne 
    @JoinColumn(name = "codigo_usuario_autor", referencedColumnName = "codigo_usuario")
    @JsonIgnore
    private Usuario usuarioAutor;

    @OneToMany(mappedBy = "post", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<Like> likes = new ArrayList<>();

    @OneToMany(mappedBy = "post", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<Comentario> comentarios = new ArrayList<>();

    @OneToMany(mappedBy = "post", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<Repost> reposteos = new ArrayList<>();

    //@ManyToOne
    //@JoinColumn(name = "codigo_comunidad", referencedColumnName = "codigo_comunidad")
    //private Comunidad comunidad;

}
