package com.aasaan.erp.model;

public class Announcement {
    private String id;
    private String text;
    private boolean active;
    private String badge; // e.g. "NEW RELEASE", "ENTERPRISE RELEASE"
    private long createdAt;

    public Announcement() {}

    public Announcement(String id, String text, boolean active, String badge, long createdAt) {
        this.id = id;
        this.text = text;
        this.active = active;
        this.badge = badge;
        this.createdAt = createdAt;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getText() { return text; }
    public void setText(String text) { this.text = text; }

    public boolean isActive() { return active; }
    public void setActive(boolean active) { this.active = active; }

    public String getBadge() { return badge; }
    public void setBadge(String badge) { this.badge = badge; }

    public long getCreatedAt() { return createdAt; }
    public void setCreatedAt(long createdAt) { this.createdAt = createdAt; }
}
