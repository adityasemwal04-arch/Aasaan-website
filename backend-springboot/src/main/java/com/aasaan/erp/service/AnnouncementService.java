package com.aasaan.erp.service;

import com.aasaan.erp.model.Announcement;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import jakarta.annotation.PostConstruct;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class AnnouncementService {

    @Value("${aasaan.data.dir:./data}")
    private String dataDirPath;

    private final ObjectMapper objectMapper = new ObjectMapper();
    private File announcementsFile;
    private final List<Announcement> inMemory = new ArrayList<>();

    @PostConstruct
    public void init() {
        File dataDir = new File(dataDirPath);
        if (!dataDir.exists()) dataDir.mkdirs();
        announcementsFile = new File(dataDir, "announcements.json");
        loadFromFile();
        if (inMemory.isEmpty()) {
            seedDefaults();
            saveToFile();
        }
    }

    private void seedDefaults() {
        inMemory.add(new Announcement(uuid(), "Your ERP, Your Rules — Custom Fields & Intelligent Workflows Made Easy.", true, "ENTERPRISE RELEASE", System.currentTimeMillis()));
        inMemory.add(new Announcement(uuid(), "Aasaan Global Search: One Search Box. Every Answer Across Sales, Stock & Finance.", true, "NEW FEATURE", System.currentTimeMillis() + 1));
        inMemory.add(new Announcement(uuid(), "AWM Flagship: Purpose-built ERP for Waste Management, Fleet & Weighbridges.", true, "PRODUCT UPDATE", System.currentTimeMillis() + 2));
    }

    private String uuid() {
        return UUID.randomUUID().toString().replace("-", "").substring(0, 12);
    }

    private void loadFromFile() {
        try {
            if (announcementsFile.exists()) {
                List<Announcement> loaded = objectMapper.readValue(announcementsFile, new TypeReference<List<Announcement>>() {});
                inMemory.addAll(loaded);
            }
        } catch (IOException e) {
            System.err.println("[AnnouncementService] Could not load file: " + e.getMessage());
        }
    }

    private void saveToFile() {
        try {
            objectMapper.writerWithDefaultPrettyPrinter().writeValue(announcementsFile, inMemory);
        } catch (IOException e) {
            System.err.println("[AnnouncementService] Could not save file: " + e.getMessage());
        }
    }

    public List<Announcement> getAll() {
        return new ArrayList<>(inMemory);
    }

    public List<Announcement> getActive() {
        return inMemory.stream().filter(Announcement::isActive).toList();
    }

    public Announcement create(Announcement a) {
        a.setId(uuid());
        a.setCreatedAt(System.currentTimeMillis());
        inMemory.add(0, a);
        saveToFile();
        return a;
    }

    public Announcement update(String id, Announcement updated) {
        for (int i = 0; i < inMemory.size(); i++) {
            if (inMemory.get(i).getId().equals(id)) {
                updated.setId(id);
                updated.setCreatedAt(inMemory.get(i).getCreatedAt());
                inMemory.set(i, updated);
                saveToFile();
                return updated;
            }
        }
        return null;
    }

    public boolean delete(String id) {
        boolean removed = inMemory.removeIf(a -> a.getId().equals(id));
        if (removed) saveToFile();
        return removed;
    }
}
