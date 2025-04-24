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
@Table(name = "comentarios")
public class Comentario {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "codigo_comentario")
    private int codigoComentario;

    @Column(name = "contenido_comentario")
    private String contenido;

    @Column(name = "multimedia_comentario")
    private String multimedia; //String para que reciba un url

    @Column(name = "fecha_comentario")
    private LocalDateTime fechaComentario;

    @ManyToOne 
    @JoinColumn(name = "codigo_usuario", referencedColumnName = "codigo_usuario")
    @JsonIgnore
    private Usuario usuarioAutor; //Usuario autor del comentario

    @OneToMany(mappedBy = "comentario", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<Like> likes = new ArrayList<>(); //Lista de likes del comentario

    @ManyToOne
    @JoinColumn(name = "codigo_post", referencedColumnName = "codigo_post")
    private Post post; //Post al que pertenece el comentario

    @ManyToOne
    @JoinColumn(name = "codigo_comentario_superior")
    private Comentario comentarioSuperior; //Por si el comentario es una respuesta a otro comentario

    @JsonIgnore
    @OneToMany(mappedBy = "comentarioSuperior", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Comentario> respuestas = new ArrayList<>(); //Lista de respuestas al comentario

    @OneToMany(mappedBy = "comentario", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<Repost> reposteos = new ArrayList<>();
}
