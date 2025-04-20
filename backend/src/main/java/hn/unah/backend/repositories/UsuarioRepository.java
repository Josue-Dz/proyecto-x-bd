package hn.unah.backend.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import hn.unah.backend.models.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Integer>{

    public Usuario findByCorreo(String correo);

    public Usuario findByNombreUsuario(String nombreUsuario);

    @Query("SELECT u FROM Usuario u WHERE u.nombreUsuario LIKE %:consulta% OR u.correo LIKE %:consulta%")
    public List<Usuario> buscarUsuario(@Param("consulta") String consulta);
    
}