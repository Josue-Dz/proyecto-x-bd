package hn.unah.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hn.unah.backend.repositories.MensajeRepository;

@Service
public class MensajeService {

    @Autowired
    private MensajeRepository mensajeRepository;

    @Autowired
    private DtoMapperService dtoMapperService;

    /*Necesitamos métodos para: 
        - Enviar y recibir mensajes, que tomen como parámetro el mensaje, el usuario que enviara y el que recibirá
        - Obtener todos los mensajes de un chat

        Cada método tiene que retornar uno o varios mensajesDtos
    */
    
}
