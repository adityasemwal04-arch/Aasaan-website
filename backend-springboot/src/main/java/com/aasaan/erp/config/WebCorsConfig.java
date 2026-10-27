package com.aasaan.erp.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebCorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOriginPatterns(
                    "https://www.aasaanerp.com",
                    "https://aasaanerp.com",
                    "http://localhost:*",
                    "https://aasaan-erp-backend.onrender.com",
                    "https://adityasemwal04-arch.github.io"
                )
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS", "HEAD", "PATCH")
                .allowedHeaders("*")
                .allowCredentials(false)
                .maxAge(3600);
    }
}
