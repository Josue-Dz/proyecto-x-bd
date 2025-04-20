package hn.unah.backend.models;

import java.io.Serializable;

import jakarta.persistence.Embeddable;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Embeddable
@EqualsAndHashCode
public class SeguidorId implements Serializable{

    @ManyToOne
    @JoinColumn(name = "codigo_usuario_seguidor")
    private Usuario seguidor;

    @ManyToOne
    @JoinColumn(name = "codigo_usuario_seguido")
    private Usuario seguido;
    
}
