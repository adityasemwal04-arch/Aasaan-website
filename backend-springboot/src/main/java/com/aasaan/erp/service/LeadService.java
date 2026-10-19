package com.aasaan.erp.service;

import com.aasaan.erp.model.Lead;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import jakarta.annotation.PostConstruct;
import java.io.File;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;

@Service
public class LeadService {

    @Value("${aasaan.data.dir:./data}")
    private String dataDirPath;

    private final ObjectMapper objectMapper = new ObjectMapper();
    private File leadsFile;
    private final List<Lead> inMemoryLeads = new ArrayList<>();

    @PostConstruct
    public void init() {
        File dataDir = new File(dataDirPath);
        if (!dataDir.exists()) {
            dataDir.mkdirs();
        }
        leadsFile = new File(dataDir, "leads.json");
        loadFromFile();

        if (inMemoryLeads.isEmpty()) {
            seedDefaultLeads();
            saveToFile();
        }
    }

    private synchronized void loadFromFile() {
        if (leadsFile != null && leadsFile.exists()) {
            try {
                List<Lead> loaded = objectMapper.readValue(leadsFile, new TypeReference<List<Lead>>() {});
                inMemoryLeads.clear();
                inMemoryLeads.addAll(loaded);
            } catch (IOException e) {
                System.err.println("Could not read leads file: " + e.getMessage());
            }
        }
    }

    private synchronized void saveToFile() {
        if (leadsFile != null) {
            try {
                objectMapper.writerWithDefaultPrettyPrinter().writeValue(leadsFile, inMemoryLeads);
            } catch (IOException e) {
                System.err.println("Could not write leads file: " + e.getMessage());
            }
        }
    }

    private void seedDefaultLeads() {
        inMemoryLeads.add(new Lead(
                1728349200000L,
                "07/10/2026, 11:30:15 AM",
                "Rajesh Sharma",
                "Apex Precision Engineering Ltd",
                "rajesh.sharma@apexengineering.in",
                "+91 98201 44521",
                "ERP Global",
                "India",
                "Need complete multi-level BOM and machine work center scheduling for 3 manufacturing units in Pune.",
                "New"
        ));
        inMemoryLeads.add(new Lead(
                1728352800000L,
                "07/10/2026, 01:15:40 PM",
                "Sunil Patil",
                "Sahyadri Dairy & Agro Processing",
                "sunil@sahyadridairy.com",
                "+91 94220 89100",
                "ERP Global",
                "India",
                "Looking for ERP for milk collection centers, BMC chilling depots, fat/SNF testing, and automated weekly farmer payouts.",
                "Contacted"
        ));
        inMemoryLeads.add(new Lead(
                1728360000000L,
                "07/10/2026, 03:45:22 PM",
                "Kavita Nair",
                "GreenLine Fleet Logistics",
                "kavita.nair@greenlinefleet.com",
                "+91 98450 12345",
                "Aasaan Waste Management (AWM)",
                "India",
                "Require telematics integration, weighbridge scale automation, and municipal waste compliance reports.",
                "Demo Scheduled"
        ));
    }

    public synchronized List<Lead> getAllLeads() {
        return new ArrayList<>(inMemoryLeads);
    }

    public synchronized Lead saveLead(Lead lead) {
        if (lead.getId() == null) {
            lead.setId(System.currentTimeMillis());
        }
        if (lead.getTimestamp() == null || lead.getTimestamp().isBlank()) {
            DateTimeFormatter dtf = DateTimeFormatter.ofPattern("dd/MM/yyyy, hh:mm:ss a");
            lead.setTimestamp(LocalDateTime.now().format(dtf));
        }
        if (lead.getStatus() == null || lead.getStatus().isBlank()) {
            lead.setStatus("New");
        }

        // Add to top of list
        inMemoryLeads.add(0, lead);
        saveToFile();

        // Forward lead asynchronously to Official Aasaan ERP REST API
        forwardToOfficialAasaanApi(lead);

        return lead;
    }

    private void forwardToOfficialAasaanApi(Lead lead) {
        new Thread(() -> {
            try {
                String apiUrl = "https://erplite.aasaan.in/rest/import_leads_into_aasaan?id=iNmozr7dtS2mWFJfIrjgUQ";
                String apiKey = "CE114E4501D2F4E2DCEA3E17B546F339";

                String solution = lead.getSolution() != null && !lead.getSolution().isBlank()
                        ? lead.getSolution()
                        : "Aasaan Enterprises";

                String requirement = lead.getMessage() != null && !lead.getMessage().isBlank()
                        ? "[Product: " + solution + "] " + lead.getMessage()
                        : "Requested demo for " + solution;

                String phone = lead.getPhone() != null ? lead.getPhone() : "";

                Map<String, Object> payload = new HashMap<>();
                payload.put("name", lead.getName() != null ? lead.getName() : "");
                payload.put("prefix", "Mr.");
                payload.put("mobile", phone);
                payload.put("phone", phone);
                payload.put("email", lead.getEmail() != null ? lead.getEmail() : "");
                payload.put("company", lead.getCompany() != null ? lead.getCompany() : "");
                payload.put("address", lead.getCountry() != null && !lead.getCountry().isBlank() ? lead.getCountry() : "India");
                payload.put("pincode", "110026");
                payload.put("website", "");
                payload.put("gstin", "");
                payload.put("requirement", requirement);
                payload.put("leadStatus", "New");
                payload.put("industry", solution);

                String jsonBody = objectMapper.writeValueAsString(payload);

                HttpClient client = HttpClient.newHttpClient();
                HttpRequest request = HttpRequest.newBuilder()
                        .uri(URI.create(apiUrl))
                        .header("Content-Type", "application/json")
                        .header("apikey", apiKey)
                        .POST(HttpRequest.BodyPublishers.ofString(jsonBody, StandardCharsets.UTF_8))
                        .build();

                HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
                System.out.println("Forwarded lead to Official Aasaan API: status=" + response.statusCode() + " body=" + response.body());
            } catch (Exception e) {
                System.err.println("Could not forward lead to Official Aasaan API: " + e.getMessage());
            }
        }).start();
    }

    public synchronized Optional<Lead> updateLead(Long id, Lead updatedData) {
        for (int i = 0; i < inMemoryLeads.size(); i++) {
            Lead existing = inMemoryLeads.get(i);
            if (existing.getId().equals(id)) {
                if (updatedData.getStatus() != null) existing.setStatus(updatedData.getStatus());
                if (updatedData.getName() != null) existing.setName(updatedData.getName());
                if (updatedData.getCompany() != null) existing.setCompany(updatedData.getCompany());
                if (updatedData.getEmail() != null) existing.setEmail(updatedData.getEmail());
                if (updatedData.getPhone() != null) existing.setPhone(updatedData.getPhone());
                if (updatedData.getMessage() != null) existing.setMessage(updatedData.getMessage());
                if (updatedData.getSolution() != null) existing.setSolution(updatedData.getSolution());
                saveToFile();
                return Optional.of(existing);
            }
        }
        return Optional.empty();
    }

    public synchronized boolean deleteLead(Long id) {
        boolean removed = inMemoryLeads.removeIf(l -> l.getId().equals(id));
        if (removed) {
            saveToFile();
        }
        return removed;
    }
}
