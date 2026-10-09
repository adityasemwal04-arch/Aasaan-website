package com.aasaan.erp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AasaanErpApplication {

    public static void main(String[] args) {
        SpringApplication.run(AasaanErpApplication.class, args);
        System.out.println("\n========================================================");
        System.out.println("   🚀 AASAAN ERP SPRING BOOT BACKEND STARTED SUCCESSFULLY!");
        System.out.println("   📡 Base URL:       http://localhost:8080");
        System.out.println("   📋 Inquiries API:  http://localhost:8080/api/leads");
        System.out.println("   📝 Blogs API:      http://localhost:8080/api/blogs");
        System.out.println("   🔒 Admin Login:    http://localhost:8080/api/auth/login");
        System.out.println("   ✨ Admin User: admin  |  Password: aasaan2026");
        System.out.println("========================================================\n");
    }
}
