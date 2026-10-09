package com.aasaan.erp.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import jakarta.annotation.PostConstruct;
import java.io.File;
import java.io.IOException;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class ContentService {

    @Value("${aasaan.data.dir:./data}")
    private String dataDirPath;

    private final ObjectMapper objectMapper = new ObjectMapper();
    private final Map<String, List<Map<String, Object>>> sectionData = new ConcurrentHashMap<>();

    @PostConstruct
    public void init() {
        File dataDir = new File(dataDirPath);
        if (!dataDir.exists()) dataDir.mkdirs();

        loadSection("lite-features");
        loadSection("lite-industries");
        loadSection("awm-modules");
        loadSection("awm-clients");
    }

    private synchronized void loadSection(String section) {
        File file = new File(dataDirPath, "content_" + section + ".json");
        if (file.exists()) {
            try {
                List<Map<String, Object>> list = objectMapper.readValue(file, new TypeReference<List<Map<String, Object>>>() {});
                sectionData.put(section, new ArrayList<>(list));
            } catch (IOException e) {
                System.err.println("[ContentService] Error reading section " + section + ": " + e.getMessage());
            }
        }
    }

    private synchronized void saveSection(String section) {
        File file = new File(dataDirPath, "content_" + section + ".json");
        try {
            List<Map<String, Object>> list = sectionData.getOrDefault(section, Collections.emptyList());
            objectMapper.writerWithDefaultPrettyPrinter().writeValue(file, list);
        } catch (IOException e) {
            System.err.println("[ContentService] Error saving section " + section + ": " + e.getMessage());
        }
    }

    public synchronized List<Map<String, Object>> getSection(String section) {
        return new ArrayList<>(sectionData.getOrDefault(section, Collections.emptyList()));
    }

    public synchronized List<Map<String, Object>> saveAll(String section, List<Map<String, Object>> items) {
        sectionData.put(section, new ArrayList<>(items));
        saveSection(section);
        return getSection(section);
    }

    public synchronized Map<String, Object> addItem(String section, Map<String, Object> item) {
        List<Map<String, Object>> list = sectionData.computeIfAbsent(section, k -> new ArrayList<>());
        if (!item.containsKey("id") || item.get("id") == null || item.get("id").toString().trim().isEmpty()) {
            item.put("id", UUID.randomUUID().toString().replace("-", "").substring(0, 10));
        }
        list.add(0, item);
        saveSection(section);
        return item;
    }

    public synchronized Map<String, Object> updateItem(String section, String id, Map<String, Object> updated) {
        List<Map<String, Object>> list = sectionData.computeIfAbsent(section, k -> new ArrayList<>());
        for (int i = 0; i < list.size(); i++) {
            Map<String, Object> existing = list.get(i);
            if (Objects.equals(String.valueOf(existing.get("id")), id)) {
                updated.put("id", id);
                list.set(i, updated);
                saveSection(section);
                return updated;
            }
        }
        // If not found, add it
        updated.put("id", id);
        list.add(updated);
        saveSection(section);
        return updated;
    }

    public synchronized boolean deleteItem(String section, String id) {
        List<Map<String, Object>> list = sectionData.get(section);
        if (list == null) return false;
        boolean removed = list.removeIf(m -> Objects.equals(String.valueOf(m.get("id")), id));
        if (removed) {
            saveSection(section);
        }
        return removed;
    }
}
