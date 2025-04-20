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
@Table(name = "mensajes")
public class Mensaje {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "codigo_mensaje")
    private int codigoMensaje;

    @ManyToOne
    @JoinColumn(name = "codigo_usuario_emisor", referencedColumnName = "codigo_usuario")
    private Usuario usuarioEmisor;

    @ManyToOne
    @JoinColumn(name = "codigo_usuario_receptor", referencedColumnName = "codigo_usuario")
    private Usuario usuarioReceptor;

    @Column(name = "fecha_enviado")
    private LocalDateTime fechaEnviado;

    @Column(name = "contenido_mensaje")
    private String contenido;

    @Column(name = "multimedia_mensaje")
    private String multimedia;

    
}
