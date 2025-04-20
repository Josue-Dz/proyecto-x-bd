package hn.unah.backend.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import hn.unah.backend.models.Post;
import hn.unah.backend.models.Usuario;


@Repository
public interface PostRepository extends JpaRepository<Post, Integer>
 {
    
    Optional<Post> findById(Integer codigoPost);

    List<Post> findByUsuarioAutor(Usuario usuario);

    //List<Post> findAllPostsOrderByFechaPost();

    @Query("SELECT p FROM Post p JOIN p.likes l WHERE l.usuario.codigoUsuario = :codigoUsuario ORDER BY p.fechaPost DESC")
    List<Post> findPostsLikedByUsuario(@org.springframework.data.repository.query.Param("codigoUsuario") int codigoUsuario);
}
