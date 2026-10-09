package com.aasaan.erp.controller;

import com.aasaan.erp.service.ContentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/content")
@CrossOrigin(origins = "*")
public class ContentController {

    @Autowired
    private ContentService contentService;

    @GetMapping("/{section}")
    public List<Map<String, Object>> getSection(@PathVariable String section) {
        return contentService.getSection(section);
    }

    @PostMapping("/{section}")
    public Map<String, Object> addItem(@PathVariable String section, @RequestBody Map<String, Object> item) {
        return contentService.addItem(section, item);
    }

    @PutMapping("/{section}/bulk")
    public List<Map<String, Object>> saveAll(@PathVariable String section, @RequestBody List<Map<String, Object>> items) {
        return contentService.saveAll(section, items);
    }

    @PutMapping("/{section}/{id}")
    public ResponseEntity<Map<String, Object>> updateItem(
            @PathVariable String section,
            @PathVariable String id,
            @RequestBody Map<String, Object> item
    ) {
        Map<String, Object> updated = contentService.updateItem(section, id, item);
        return ResponseEntity.ok(updated);
    }

    @DeleteMapping("/{section}/{id}")
    public ResponseEntity<Void> deleteItem(@PathVariable String section, @PathVariable String id) {
        boolean deleted = contentService.deleteItem(section, id);
        if (!deleted) return ResponseEntity.notFound().build();
        return ResponseEntity.ok().build();
    }
}
