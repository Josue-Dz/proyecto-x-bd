package hn.unah.backend.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import hn.unah.backend.models.Post;
import hn.unah.backend.models.Usuario;

@Repository
public interface PostRepository extends JpaRepository<Post, Integer>
 {
    
    Optional<Post> findById(Integer codigoPost);

    List<Post> findByUsuarioAutor(Usuario usuario);
}
