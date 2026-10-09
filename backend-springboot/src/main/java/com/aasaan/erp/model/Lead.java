package com.aasaan.erp.model;

public class Lead {
    private Long id;
    private String timestamp;
    private String name;
    private String company;
    private String email;
    private String phone;
    private String solution;
    private String country;
    private String message;
    private String status; // "New", "Contacted", "Demo Scheduled", "Closed"

    public Lead() {
    }

    public Lead(Long id, String timestamp, String name, String company, String email, String phone, String solution, String country, String message, String status) {
        this.id = id;
        this.timestamp = timestamp;
        this.name = name;
        this.company = company;
        this.email = email;
        this.phone = phone;
        this.solution = solution;
        this.country = country;
        this.message = message;
        this.status = status;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(String timestamp) {
        this.timestamp = timestamp;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getSolution() {
        return solution;
    }

    public void setSolution(String solution) {
        this.solution = solution;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
