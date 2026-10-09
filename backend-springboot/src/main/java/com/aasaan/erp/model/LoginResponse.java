package com.aasaan.erp.model;

import java.util.Map;

public class LoginResponse {
    private boolean success;
    private String token;
    private String message;
    private Map<String, Object> user;

    public LoginResponse() {}

    public LoginResponse(boolean success, String token, Map<String, Object> user) {
        this.success = success;
        this.token = token;
        this.user = user;
    }

    public LoginResponse(boolean success, String message) {
        this.success = success;
        this.message = message;
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Map<String, Object> getUser() {
        return user;
    }

    public void setUser(Map<String, Object> user) {
        this.user = user;
    }
}
