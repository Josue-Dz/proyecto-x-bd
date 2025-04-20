package hn.unah.backend.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hn.unah.backend.dtos.MensajeDto;
import hn.unah.backend.dtos.UsuarioDto;
import hn.unah.backend.models.Mensaje;
import hn.unah.backend.repositories.MensajeRepository;

@Service
public class MensajeService {

    @Autowired
    private MensajeRepository mensajeRepository;

    /*Necesitamos métodos para: 
        - Enviar y recibir mensajes, que tomen como parámetro el mensaje, el usuario que enviara y el que recibirá
        - Obtener todos los mensajes de un chat

        Cada método tiene que retornar uno o varios mensajesDtos
    */

    public MensajeDto aMensajeDto(Mensaje mensaje){
        MensajeDto mensajeDto = new MensajeDto();
        mensajeDto.setCodigoMensaje(mensaje.getCodigoMensaje());
        mensajeDto.setFechaEnviado(mensaje.getFechaEnviado());
        mensajeDto.setContenido(mensaje.getContenido());
        mensajeDto.setMultimedia(mensaje.getMultimedia());

        UsuarioDto usuarioEmisor = new UsuarioDto();
        usuarioEmisor.setId(mensaje.getUsuarioEmisor().getCodigoUsuario());
        mensajeDto.setUsuarioEmisor(usuarioEmisor);

        UsuarioDto usuarioReceptor = new UsuarioDto();
        usuarioReceptor.setId(mensaje.getUsuarioReceptor().getCodigoUsuario());
        mensajeDto.setUsuarioReceptor(usuarioReceptor);

        return mensajeDto;
    }

    public List<MensajeDto> aMensajesDtos(List<Mensaje> mensajes){
        List<MensajeDto> mensajeDtos = new ArrayList<>();

        for (Mensaje mensaje : mensajes) {
            MensajeDto mensajeDto = aMensajeDto(mensaje);
            mensajeDtos.add(mensajeDto);
        }

        return mensajeDtos;

    }
    
}
