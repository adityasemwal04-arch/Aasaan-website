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
        "/awm",
        "/lite",
        "/global",
        "/partners",
        "/login",
        "/admin",
        "/blog",
        "/blog/{slug:[^\\.]*}"
    })
    public String forwardSpa() {
        return "forward:/index.html";
    }
}
