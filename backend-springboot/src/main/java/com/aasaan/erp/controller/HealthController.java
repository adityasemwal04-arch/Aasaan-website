package com.aasaan.erp.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.Instant;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class HealthController {

    @GetMapping("/health")
    public Map<String, Object> health() {
        Map<String, Object> res = new HashMap<>();
        res.put("status", "ok");
        res.put("service", "Aasaan ERP Java Spring Boot REST API");
        res.put("framework", "Spring Boot 3.2 (Java 17)");
        res.put("timestamp", Instant.now().toString());
        return res;
    }
}
