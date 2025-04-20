package hn.unah.backend.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import hn.unah.backend.models.Like;

@Repository
public interface LikeRepository extends JpaRepository<Like, Integer>{

    public Like findByUsuarioCodigoUsuarioAndPostCodigoPost(int codigoUsuario, int codigoPost);

    public Like findByUsuarioCodigoUsuarioAndComentarioCodigoComentario(int codigoUsuario, int codigoComentario);

    public List<Like> findByPostCodigoPost(int codigoPost);

    public List<Like> findByComentarioCodigoComentario(int codigoComentario);
      
}
