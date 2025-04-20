package hn.unah.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import hn.unah.backend.models.Seguidor;
import hn.unah.backend.models.SeguidorId;

public interface SeguidorRepository extends JpaRepository<Seguidor, SeguidorId>{

}
