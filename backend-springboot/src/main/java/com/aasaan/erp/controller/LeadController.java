package com.aasaan.erp.controller;

import com.aasaan.erp.model.Lead;
import com.aasaan.erp.service.LeadService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/leads")
public class LeadController {

    private final LeadService leadService;

    public LeadController(LeadService leadService) {
        this.leadService = leadService;
    }

    @GetMapping
    public List<Lead> getAllLeads() {
        return leadService.getAllLeads();
    }

    @PostMapping
    public ResponseEntity<Map<String, Object>> createLead(@RequestBody Lead lead) {
        Lead saved = leadService.saveLead(lead);
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("lead", saved);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Map<String, Object>> updateLead(@PathVariable Long id, @RequestBody Lead leadData) {
        Optional<Lead> updated = leadService.updateLead(id, leadData);
        Map<String, Object> response = new HashMap<>();

        if (updated.isPresent()) {
            response.put("success", true);
            response.put("lead", updated.get());
            return ResponseEntity.ok(response);
        } else {
            response.put("success", false);
            response.put("message", "Lead not found");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Object>> deleteLead(@PathVariable Long id) {
        boolean deleted = leadService.deleteLead(id);
        Map<String, Object> response = new HashMap<>();

        if (deleted) {
            response.put("success", true);
            response.put("message", "Inquiry deleted successfully");
            return ResponseEntity.ok(response);
        } else {
            response.put("success", false);
            response.put("message", "Inquiry not found");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        }
    }
}
