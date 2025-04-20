package hn.unah.backend.models;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
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
public class Seguidor {

    @EmbeddedId
    private SeguidorId id;

    @Column(name = "fecha_seguido")
    private LocalDate fechaSeguido;
    
}
