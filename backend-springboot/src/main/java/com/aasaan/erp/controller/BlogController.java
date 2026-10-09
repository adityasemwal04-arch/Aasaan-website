package com.aasaan.erp.controller;

import com.aasaan.erp.model.Blog;
import com.aasaan.erp.service.BlogService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/blogs")
public class BlogController {

    private final BlogService blogService;

    public BlogController(BlogService blogService) {
        this.blogService = blogService;
    }

    @GetMapping
    public List<Blog> getAllBlogs() {
        return blogService.getAllBlogs();
    }

    @GetMapping("/{slug}")
    public ResponseEntity<Object> getBlogBySlug(@PathVariable String slug) {
        Optional<Blog> blog = blogService.getBlogBySlug(slug);
        if (blog.isPresent()) {
            return ResponseEntity.ok(blog.get());
        }
        Map<String, Object> err = new HashMap<>();
        err.put("success", false);
        err.put("message", "Blog article not found for slug: " + slug);
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(err);
    }

    @PutMapping("/{slug}")
    public ResponseEntity<Map<String, Object>> updateBlog(@PathVariable String slug, @RequestBody Blog blog) {
        Blog saved = blogService.saveOrUpdateBlog(slug, blog);
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("blog", saved);
        return ResponseEntity.ok(response);
    }

    @PostMapping
    public ResponseEntity<Map<String, Object>> createBlog(@RequestBody Blog blog) {
        String slug = blog.getSlug();
        if (slug == null || slug.isBlank()) {
            slug = blog.getTitle().toLowerCase().replaceAll("[^a-z0-9]+", "-");
        }
        Blog saved = blogService.saveOrUpdateBlog(slug, blog);
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("blog", saved);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @DeleteMapping("/{slug}")
    public ResponseEntity<Map<String, Object>> deleteBlog(@PathVariable String slug) {
        boolean deleted = blogService.deleteBlog(slug);
        Map<String, Object> response = new HashMap<>();
        if (deleted) {
            response.put("success", true);
            response.put("message", "Blog deleted successfully");
            return ResponseEntity.ok(response);
        } else {
            response.put("success", false);
            response.put("message", "Blog not found");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        }
    }
}
