package hn.unah.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import hn.unah.backend.dtos.AuthCreateUserRequest;
import hn.unah.backend.dtos.AuthLoginRequest;
import hn.unah.backend.dtos.AuthResponse;
import hn.unah.backend.services.UserDetailsServiceImpl;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthenticationController {

    @Autowired
    private UserDetailsServiceImpl userDetailsServiceImpl;

    @PostMapping("/acceso")
    public ResponseEntity<AuthResponse> login(@RequestBody AuthLoginRequest userRequest) {
        return new ResponseEntity<>(this.userDetailsServiceImpl.inicioSesion(userRequest), HttpStatus.OK);
    }

    @PostMapping("/registro")
    public ResponseEntity<AuthResponse> registro(@RequestBody AuthCreateUserRequest authCreateUserRequest) {
        AuthResponse response = this.userDetailsServiceImpl.registrarUsuario(authCreateUserRequest);

        if (!response.status()) {
            // Usuario ya registrado
            return new ResponseEntity<>(response, HttpStatus.CONFLICT);
        }

        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
