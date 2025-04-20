package hn.unah.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import hn.unah.backend.models.Mensaje;

@Repository
public interface MensajeRepository extends JpaRepository<Mensaje, Integer> {

    
}
