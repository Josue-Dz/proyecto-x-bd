package hn.unah.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import hn.unah.backend.models.Comentario;

@Repository
public interface ComentarioRepository extends JpaRepository<Comentario, Integer>{
    
}
