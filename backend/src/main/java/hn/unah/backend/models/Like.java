package hn.unah.backend.models;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
@Table(name = "likes")
public class Like {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "codigo_like")
    private int codigoLike;

    @Column(name = "fecha_like_publicacion")
    private LocalDateTime fechaLike;

    @ManyToOne
    @JoinColumn(name = "codigo_post", referencedColumnName = "codigo_post")
    private Post post;

    @ManyToOne
    @JoinColumn(name = "codigo_comentario", referencedColumnName = "codigo_comentario")
    private Comentario comentario;

    @ManyToOne
    @JoinColumn(name = "codigo_usuario", referencedColumnName = "codigo_usuario")
    private Usuario usuario;


   
}
