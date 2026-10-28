package com.aasaan.erp.controller;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.aasaan.erp.service.EmailService;

import jakarta.annotation.PostConstruct;
import java.io.File;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/settings")
@CrossOrigin(origins = "*")
public class SettingsController {

    @Value("${aasaan.data.dir:./data}")
    private String dataDirPath;

    @Autowired(required = false)
    @Lazy
    private EmailService emailService;

    private final ObjectMapper objectMapper = new ObjectMapper();
    private File settingsFile;
    private final Map<String, Object> notificationSettings = new HashMap<>();

    @PostConstruct
    public void init() {
        File dataDir = new File(dataDirPath);
        if (!dataDir.exists()) {
            dataDir.mkdirs();
        }
        settingsFile = new File(dataDir, "notification_settings.json");
        loadSettings();

        if (notificationSettings.isEmpty() || !notificationSettings.containsKey("recipientEmail") 
            || "work007life22@gmail.com".equals(notificationSettings.get("recipientEmail"))
            || "sales@aasaanerp.com".equals(notificationSettings.get("recipientEmail"))) {
            notificationSettings.put("recipientEmail", "aditya@aasaan.in, contactus@aasaanservices.in, neha@aasaan.in");
            notificationSettings.put("recipientEmails", java.util.Arrays.asList("aditya@aasaan.in", "contactus@aasaanservices.in", "neha@aasaan.in"));
            notificationSettings.put("senderEmail", "care@aasaanservices.in");
            notificationSettings.put("enabled", true);
            notificationSettings.put("updatedAt", LocalDateTime.now().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME));
            saveSettings();
        } else if (!notificationSettings.containsKey("senderEmail") || "contactus@aasaanservices.in".equals(notificationSettings.get("senderEmail"))) {
            notificationSettings.put("senderEmail", "care@aasaanservices.in");
            saveSettings();
        }
    }

    private synchronized void loadSettings() {
        if (settingsFile != null && settingsFile.exists()) {
            try {
                Map<String, Object> loaded = objectMapper.readValue(settingsFile, new TypeReference<Map<String, Object>>() {});
                notificationSettings.clear();
                notificationSettings.putAll(loaded);
            } catch (IOException e) {
                System.err.println("[SettingsController] Error reading notification settings: " + e.getMessage());
            }
        }
    }

    private synchronized void saveSettings() {
        if (settingsFile != null) {
            try {
                objectMapper.writerWithDefaultPrettyPrinter().writeValue(settingsFile, notificationSettings);
            } catch (IOException e) {
                System.err.println("[SettingsController] Error saving notification settings: " + e.getMessage());
            }
        }
    }

    @GetMapping("/notifications")
    public synchronized Map<String, Object> getNotificationSettings() {
        return new HashMap<>(notificationSettings);
    }

    @PutMapping("/notifications")
    public synchronized ResponseEntity<Map<String, Object>> updateNotificationSettings(@RequestBody Map<String, Object> payload) {
        if (payload.containsKey("recipientEmail")) {
            notificationSettings.put("recipientEmail", payload.get("recipientEmail"));
        }
        if (payload.containsKey("recipientEmails")) {
            notificationSettings.put("recipientEmails", payload.get("recipientEmails"));
        }
        if (payload.containsKey("senderEmail")) {
            notificationSettings.put("senderEmail", payload.get("senderEmail"));
        }
        if (payload.containsKey("enabled")) {
            notificationSettings.put("enabled", payload.get("enabled"));
        }
        notificationSettings.put("updatedAt", LocalDateTime.now().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME));
        saveSettings();

        Map<String, Object> response = new HashMap<>(notificationSettings);
        response.put("success", true);
        response.put("message", "Notification settings saved successfully");
        return ResponseEntity.ok(response);
    }

    @PostMapping("/notifications/test")
    public ResponseEntity<Map<String, Object>> sendTestEmail(@RequestBody(required = false) Map<String, String> payload) {
        String targetEmail = null;
        if (payload != null && payload.containsKey("recipient")) {
            targetEmail = payload.get("recipient");
        }
        Map<String, Object> resp = new HashMap<>();
        try {
            if (emailService != null) {
                boolean sent = emailService.sendTestEmail(targetEmail);
                resp.put("success", sent);
                resp.put("message", "Test alert email dispatched successfully via care@aasaanservices.in");
                return ResponseEntity.ok(resp);
            } else {
                resp.put("success", false);
                resp.put("message", "EmailService is not available");
                return ResponseEntity.status(503).body(resp);
            }
        } catch (Exception e) {
            resp.put("success", false);
            resp.put("message", "Failed to dispatch test email: " + e.getMessage());
            return ResponseEntity.status(500).body(resp);
        }
    }
}
