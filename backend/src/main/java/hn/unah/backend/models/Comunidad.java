package hn.unah.backend.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.OneToMany;

import java.time.LocalDate;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name ="comunidades")

public class Comunidad{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "codigo_comunidad")
    private Integer codigoComunidad;

    @Column(name = "nombre_comunidad", nullable = false, length = 100)
    private String nombreComunidad;

    @Column(name = "descripcion_comunidad", length = 500)
    private String descripcion;

    @Column(name = "fecha_creacion")
    private LocalDate fechaCreacion;

    @JsonIgnore
    @OneToMany(mappedBy = "comunidad", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Post> posts;

}