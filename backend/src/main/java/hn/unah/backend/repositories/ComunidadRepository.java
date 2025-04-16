package hn.unah.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import hn.unah.backend.models.Comunidad;

@Repository
public interface ComunidadRepository extends JpaRepository<Comunidad, Integer>{
    
}
