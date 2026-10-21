package com.aasaan.erp.controller;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
            notificationSettings.put("recipientEmail", "aditya@aasaan.in");
            notificationSettings.put("enabled", true);
            notificationSettings.put("updatedAt", LocalDateTime.now().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME));
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
}
