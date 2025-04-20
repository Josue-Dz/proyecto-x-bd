package hn.unah.backend.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import hn.unah.backend.models.Like;

@Repository
public interface LikeRepository extends JpaRepository<Like, Integer>{

    public Like existeLike(int codigoUsuario, int codigoPost);

    public List<Like> obtenerLikesPorPostId(int codigoPost);

    public List<Like> obtenerLikesPorComentarioId(int codigoComentario);
      
}
