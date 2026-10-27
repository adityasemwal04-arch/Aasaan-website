package com.aasaan.erp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class AasaanErpApplication extends SpringBootServletInitializer {

    // Required for WAR deployment on external Tomcat server
    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(AasaanErpApplication.class);
    }

    public static void main(String[] args) {
        SpringApplication.run(AasaanErpApplication.class, args);
        System.out.println("\n========================================================");
        System.out.println("   🚀 AASAAN ERP SPRING BOOT BACKEND STARTED SUCCESSFULLY!");
        System.out.println("   📡 Base URL:       https://www.aasaanerp.com");
        System.out.println("   📋 Inquiries API:  https://www.aasaanerp.com/api/leads");
        System.out.println("   📝 Blogs API:      https://www.aasaanerp.com/api/blogs");
        System.out.println("   🔒 Admin Login:    https://www.aasaanerp.com/api/auth/login");
        System.out.println("   ✨ Admin User: admin  |  Password: aasaan2026");
        System.out.println("========================================================\n");
    }
}
