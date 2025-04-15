package hn.unah.backend.models;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
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
@Table(name = "seguidores")
@IdClass(SeguidorId.class) //Clave Compuesta
public class Seguidor {

    @Id
    @ManyToOne
    @JoinColumn(name = "codigo_usuario_seguidor")
    private Usuario seguidor;

    @Id
    @ManyToOne
    @JoinColumn(name = "codigo_usuario_seguido")
    private Usuario seguido;

    @Column(name = "fecha_seguido")
    private LocalDate fechaSeguido;
    
}
