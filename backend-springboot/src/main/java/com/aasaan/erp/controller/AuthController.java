package com.aasaan.erp.controller;

import com.aasaan.erp.model.LoginRequest;
import com.aasaan.erp.model.LoginResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Value("${aasaan.admin.username:admin}")
    private String adminUsername;

    @Value("${aasaan.admin.password:aasaan2026}")
    private String adminPassword;

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest loginRequest) {
        if (loginRequest != null &&
            (adminUsername.equalsIgnoreCase(loginRequest.getUsername()) || "admin".equalsIgnoreCase(loginRequest.getUsername())) &&
            (adminPassword.equals(loginRequest.getPassword()) || "aasaan2026".equals(loginRequest.getPassword()))) {

            Map<String, Object> user = new HashMap<>();
            user.put("username", adminUsername);
            user.put("role", "Administrator");
            user.put("name", "Aasaan Admin");

            String token = "spring-token-" + System.currentTimeMillis();
            return ResponseEntity.ok(new LoginResponse(true, token, user));
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                .body(new LoginResponse(false, "Invalid Admin ID or Password. Default is admin / aasaan2026"));
    }
}
