package com.aasaan.erp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class SpaForwardController {

    /**
     * Forwards clean SPA client-side routes to index.html so direct refreshes
     * or bookmark visits return HTTP 200 without 404 errors.
     */
    @GetMapping(value = {
        "/services",
        "/services/",
        "/services/**",
        "/about",
        "/about/",
        "/about/**",
        "/about-us",
        "/about-us/",
        "/about-us/**",
        "/awm",
        "/awm/",
        "/awm/**",
        "/lite",
        "/lite/",
        "/lite/**",
        "/global",
        "/global/",
        "/global/**",
        "/partners",
        "/partners/",
        "/partners/**",
        "/partner",
        "/partner/",
        "/partner/**",
        "/login",
        "/login/",
        "/login/**",
        "/admin",
        "/admin/",
        "/admin/**",
        "/blog",
        "/blog/",
        "/blog/**",
        "/contact",
        "/contact/",
        "/products",
        "/products/",
        "/solutions",
        "/solutions/"
    })
    public String forwardSpa() {
        return "forward:/index.html";
    }
}
