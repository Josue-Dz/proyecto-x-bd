package hn.unah.backend.config;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import hn.unah.backend.config.filters.JwtAuthorizationFilter;
import hn.unah.backend.config.jwt.JwtUtils;
import hn.unah.backend.services.UserDetailsServiceImpl;

@Configuration
@EnableWebSecurity
public class SecurityConf {

    @Autowired
    private JwtUtils jwtUtils;

    @Lazy
    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    @Bean
    SecurityFilterChain filterChain(HttpSecurity httpSecurity, AuthenticationManager authenticationManager) throws Exception {
        return httpSecurity
            .cors(Customizer.withDefaults()) // Activamos soporte CORS
            .csrf(config -> config.disable())
            .httpBasic(Customizer.withDefaults())
            .authorizeHttpRequests(auth -> {
                auth.requestMatchers("/membresia/pagar").authenticated();
                auth.anyRequest().permitAll();
            })
            .sessionManagement(session -> {
                session.sessionCreationPolicy(SessionCreationPolicy.STATELESS);
            })
            .addFilterBefore(new JwtAuthorizationFilter(jwtUtils), BasicAuthenticationFilter.class)
            .build();
    }

    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    AuthenticationManager authenticationManager(HttpSecurity httpSecurity, PasswordEncoder passwordEncoder) throws Exception {
        AuthenticationManagerBuilder authenticationManagerBuilder = httpSecurity.getSharedObject(AuthenticationManagerBuilder.class);
        authenticationManagerBuilder
            .userDetailsService(userDetailsService)
            .passwordEncoder(passwordEncoder());
        return authenticationManagerBuilder.build();
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(List.of("http://localhost:5173")); // Frontend local
        configuration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        configuration.setAllowedHeaders(List.of("*"));
        configuration.setAllowCredentials(true); // Necesario si usas cookies o Authorization headers

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}
