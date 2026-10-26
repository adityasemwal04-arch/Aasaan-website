package com.aasaan.erp.controller;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.http.HttpServletRequest;

/**
 * Handles all unmapped URLs and 404s in Spring Boot, forwarding them
 * to index.html for client-side SPA routing (except /api/ REST endpoints).
 */
@Controller
public class CustomErrorController implements ErrorController {

    @RequestMapping("/error")
    public String handleError(HttpServletRequest request) {
        Object uriObj = request.getAttribute(RequestDispatcher.ERROR_REQUEST_URI);
        String uri = uriObj != null ? uriObj.toString() : "";

        // If it's an API call, don't forward to HTML
        if (uri.startsWith("/api/")) {
            return "forward:/api/health";
        }

        // Forward all frontend routes (/blogs, /blog/..., etc.) to SPA index.html
        return "forward:/index.html";
    }
}
