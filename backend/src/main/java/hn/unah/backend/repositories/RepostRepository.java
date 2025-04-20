package hn.unah.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import hn.unah.backend.models.Repost;

@Repository
public interface RepostRepository extends JpaRepository<Repost, Integer>{
      
}