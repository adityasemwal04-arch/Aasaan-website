package com.aasaan.erp.controller;

import com.aasaan.erp.model.Announcement;
import com.aasaan.erp.service.AnnouncementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/announcements")
@CrossOrigin(origins = "*")
public class AnnouncementController {

    @Autowired
    private AnnouncementService announcementService;

    /** GET /api/announcements — all announcements (admin view) */
    @GetMapping
    public List<Announcement> getAll() {
        return announcementService.getAll();
    }

    /** GET /api/announcements/active — only active ones (Navbar uses this) */
    @GetMapping("/active")
    public List<Announcement> getActive() {
        return announcementService.getActive();
    }

    /** POST /api/announcements — create new */
    @PostMapping
    public Announcement create(@RequestBody Announcement a) {
        return announcementService.create(a);
    }

    /** PUT /api/announcements/{id} — update */
    @PutMapping("/{id}")
    public ResponseEntity<Announcement> update(@PathVariable String id, @RequestBody Announcement a) {
        Announcement updated = announcementService.update(id, a);
        if (updated == null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(updated);
    }

    /** DELETE /api/announcements/{id} */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable String id) {
        boolean deleted = announcementService.delete(id);
        if (!deleted) return ResponseEntity.notFound().build();
        return ResponseEntity.ok().build();
    }
}
