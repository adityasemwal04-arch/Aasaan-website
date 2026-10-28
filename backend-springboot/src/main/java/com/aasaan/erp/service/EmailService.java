package com.aasaan.erp.service;

import com.aasaan.erp.controller.SettingsController;
import com.aasaan.erp.model.Lead;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

@Service
public class EmailService {

    @Autowired(required = false)
    private JavaMailSender mailSender;

    @Autowired
    private SettingsController settingsController;

    @Value("${spring.mail.username:care@aasaanservices.in}")
    private String defaultSenderEmail;

    /**
     * Dispatches real-time lead notification email asynchronously using configured SMTP
     */
    public void sendLeadNotificationEmailAsync(Lead lead) {
        java.util.concurrent.CompletableFuture.runAsync(() -> {
            try {
                sendLeadNotificationEmail(lead);
            } catch (Exception e) {
                System.err.println("⚠️ [EmailService] Failed to send lead notification email: " + e.getMessage());
            }
        });
    }

    /**
     * Synchronous send method for lead notification
     */
    public boolean sendLeadNotificationEmail(Lead lead) {
        if (mailSender == null) {
            System.err.println("⚠️ [EmailService] JavaMailSender is not configured or disabled.");
            return false;
        }

        Map<String, Object> settings = settingsController.getNotificationSettings();
        if (settings != null && Boolean.FALSE.equals(settings.get("enabled"))) {
            System.out.println("ℹ️ [EmailService] Email notifications are disabled in settings.");
            return false;
        }

        List<String> targetEmails = resolveRecipients(settings);
        if (targetEmails.isEmpty()) {
            targetEmails = Arrays.asList("care@aasaanservices.in", "aditya@aasaan.in", "contactus@aasaanservices.in");
        }

        String senderAddress = (settings != null && settings.get("senderEmail") != null)
                ? String.valueOf(settings.get("senderEmail")).trim()
                : defaultSenderEmail;

        String leadName = lead.getName() != null && !lead.getName().isBlank() ? lead.getName() : "Anonymous";
        String leadCompany = lead.getCompany() != null && !lead.getCompany().isBlank() ? lead.getCompany() : "Not Specified";
        String leadEmail = lead.getEmail() != null && !lead.getEmail().isBlank() ? lead.getEmail() : "N/A";
        String leadPhone = lead.getPhone() != null && !lead.getPhone().isBlank() ? lead.getPhone() : "N/A";
        String leadSolution = lead.getSolution() != null && !lead.getSolution().isBlank() ? lead.getSolution() : "Aasaan Enterprises";
        String leadCountry = lead.getCountry() != null && !lead.getCountry().isBlank() ? lead.getCountry() : "India";
        String leadMessage = lead.getMessage() != null && !lead.getMessage().isBlank() ? lead.getMessage() : "None";
        String timestamp = lead.getTimestamp() != null && !lead.getTimestamp().isBlank() ? lead.getTimestamp() : "Just now";

        String subject = "🚨 New Aasaan ERP Lead: " + leadName + " (" + leadCompany + ")";

        String htmlBody = buildLeadEmailHtml(
                leadName,
                leadCompany,
                leadEmail,
                leadPhone,
                leadSolution,
                leadCountry,
                leadMessage,
                timestamp,
                senderAddress
        );

        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

            helper.setFrom(senderAddress, "Aasaan ERP Notifications");
            helper.setTo(targetEmails.toArray(new String[0]));
            if (!"N/A".equals(leadEmail) && leadEmail.contains("@")) {
                helper.setReplyTo(leadEmail, leadName);
            } else {
                helper.setReplyTo(senderAddress);
            }
            helper.setSubject(subject);
            helper.setText(htmlBody, true);

            mailSender.send(message);
            System.out.println("✅ [EmailService] Lead notification email sent to " + targetEmails + " via " + senderAddress);
            return true;
        } catch (Exception ex) {
            System.err.println("❌ [EmailService] Error dispatching lead alert: " + ex.getMessage());
            ex.printStackTrace();
            return false;
        }
    }

    /**
     * Dispatches automated confirmation / thank-you email directly to the client
     */
    public void sendClientConfirmationEmailAsync(Lead lead) {
        java.util.concurrent.CompletableFuture.runAsync(() -> {
            try {
                sendClientConfirmationEmail(lead);
            } catch (Exception e) {
                System.err.println("⚠️ [EmailService] Failed to send client confirmation email: " + e.getMessage());
            }
        });
    }

    public boolean sendClientConfirmationEmail(Lead lead) {
        if (mailSender == null) {
            return false;
        }

        String clientEmail = lead.getEmail() != null ? lead.getEmail().trim() : "";
        if (clientEmail.isBlank() || !clientEmail.contains("@")) {
            System.out.println("ℹ️ [EmailService] Skipping client confirmation email: invalid or missing email.");
            return false;
        }

        String clientName = lead.getName() != null && !lead.getName().isBlank() ? lead.getName() : "Valued Customer";
        String clientCompany = lead.getCompany() != null && !lead.getCompany().isBlank() ? lead.getCompany() : "your organization";
        String clientSolution = lead.getSolution() != null && !lead.getSolution().isBlank() ? lead.getSolution() : "Aasaan ERP";
        String clientPhone = lead.getPhone() != null && !lead.getPhone().isBlank() ? lead.getPhone() : "N/A";
        String clientMessage = lead.getMessage() != null && !lead.getMessage().isBlank() ? lead.getMessage() : "";

        String subject = "Thank You for Contacting Aasaan ERP - Demo Request Received";

        String htmlBody = "<div style=\"font-family: Arial, Helvetica, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #E2E8F0; border-radius: 12px; overflow: hidden; color: #1E293B;\">"
                + "<div style=\"background: #0B1329; color: #FFFFFF; padding: 24px 28px; text-align: left;\">"
                + "<h2 style=\"margin: 0; font-size: 20px; font-weight: 800; color: #FFFFFF;\">Aasaan ERP</h2>"
                + "<p style=\"margin: 6px 0 0; font-size: 13px; color: #94A3B8;\">Next-Generation Cloud ERP & Enterprise Solutions</p>"
                + "</div>"
                + "<div style=\"padding: 28px;\">"
                + "<p style=\"font-size: 15px; line-height: 1.5; margin-top: 0;\">Hi <strong>" + clientName + "</strong>,</p>"
                + "<p style=\"font-size: 14.5px; line-height: 1.6; color: #334155;\">"
                + "Thank you for registering and submitting your query for <strong>" + clientSolution + "</strong>. "
                + "We have safely received your request, and our solution engineering team will shortly get back to you within <strong>2 business hours</strong>."
                + "</p>"
                + "<div style=\"background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px; padding: 16px; margin: 20px 0;\">"
                + "<div style=\"font-size: 12px; font-weight: 700; color: #2563EB; text-transform: uppercase; margin-bottom: 8px;\">Your Submission Summary</div>"
                + "<div style=\"font-size: 13.5px; line-height: 1.6; color: #475569;\">"
                + "• <strong>Company:</strong> " + clientCompany + "<br>"
                + "• <strong>Product / Solution:</strong> " + clientSolution + "<br>"
                + "• <strong>Phone / WhatsApp:</strong> " + clientPhone + "<br>"
                + (clientMessage.isBlank() ? "" : "• <strong>Requirements:</strong> " + clientMessage + "<br>")
                + "</div>"
                + "</div>"
                + "<p style=\"font-size: 14px; line-height: 1.5; color: #475569;\">"
                + "If you have any urgent queries, simply reply directly to this email or reach us at <a href=\"mailto:care@aasaanservices.in\" style=\"color: #2563EB; text-decoration: none;\">care@aasaanservices.in</a>."
                + "</p>"
                + "<hr style=\"border: none; border-top: 1px solid #E2E8F0; margin: 24px 0;\">"
                + "<p style=\"font-size: 13px; color: #64748B; margin-bottom: 0;\">"
                + "Best regards,<br>"
                + "<strong>Aasaan ERP Solutions Team</strong><br>"
                + "Aasaan Services Solutions Pvt Ltd<br>"
                + "<a href=\"https://www.aasaanerp.com\" style=\"color: #2563EB; text-decoration: none;\">www.aasaanerp.com</a>"
                + "</p>"
                + "</div>"
                + "</div>";

        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

            helper.setFrom(defaultSenderEmail, "Aasaan ERP Team");
            helper.setTo(clientEmail);
            helper.setReplyTo(defaultSenderEmail, "Aasaan ERP Team");
            helper.setSubject(subject);
            helper.setText(htmlBody, true);

            mailSender.send(message);
            System.out.println("✅ [EmailService] Client confirmation email sent to: " + clientEmail + " via " + defaultSenderEmail);
            return true;
        } catch (Exception ex) {
            System.err.println("❌ [EmailService] Error dispatching client confirmation email: " + ex.getMessage());
            return false;
        }
    }

    /**
     * Sends a test alert email to verify SMTP configuration
     */
    public boolean sendTestEmail(String recipient) {
        if (mailSender == null) {
            throw new IllegalStateException("JavaMailSender is not initialized. Please verify spring.mail configuration.");
        }

        String target = (recipient != null && !recipient.isBlank()) ? recipient.trim() : defaultSenderEmail;
        String subject = "✅ Aasaan ERP SMTP Test Alert (care@aasaanservices.in)";
        String timestamp = java.time.LocalDateTime.now().format(java.time.format.DateTimeFormatter.ofPattern("dd/MM/yyyy, hh:mm:ss a"));

        String html = "<div style=\"font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 24px; border: 1px solid #E2E8F0; border-radius: 12px; background: #ffffff;\">"
                + "<div style=\"text-align: center; padding-bottom: 16px; border-bottom: 2px solid #2563EB;\">"
                + "<h2 style=\"color: #1E293B; margin: 0 0 6px;\">Aasaan ERP Server Notification Test</h2>"
                + "<span style=\"background: #ECFDF5; color: #065F46; padding: 4px 12px; border-radius: 20px; font-size: 13px; font-weight: bold;\">SMTP Verified & Active</span>"
                + "</div>"
                + "<p style=\"font-size: 14px; color: #334155; line-height: 1.6; margin: 18px 0;\">"
                + "This test alert confirms that your Spring Boot backend SMTP service is <strong>fully functional</strong> and sending emails directly from <strong>" + defaultSenderEmail + "</strong>."
                + "</p>"
                + "<table style=\"width: 100%; border-collapse: collapse; font-size: 13.5px; margin: 18px 0; background: #F8FAFC; border-radius: 8px;\">"
                + "<tr><td style=\"padding: 10px 14px; font-weight: bold; color: #475569; width: 35%; border-bottom: 1px solid #E2E8F0;\">Sender Address:</td><td style=\"padding: 10px 14px; color: #1E293B; border-bottom: 1px solid #E2E8F0;\">" + defaultSenderEmail + "</td></tr>"
                + "<tr><td style=\"padding: 10px 14px; font-weight: bold; color: #475569; border-bottom: 1px solid #E2E8F0;\">Recipient:</td><td style=\"padding: 10px 14px; color: #1E293B; border-bottom: 1px solid #E2E8F0;\">" + target + "</td></tr>"
                + "<tr><td style=\"padding: 10px 14px; font-weight: bold; color: #475569; border-bottom: 1px solid #E2E8F0;\">Timestamp:</td><td style=\"padding: 10px 14px; color: #1E293B; border-bottom: 1px solid #E2E8F0;\">" + timestamp + "</td></tr>"
                + "<tr><td style=\"padding: 10px 14px; font-weight: bold; color: #475569;\">SMTP Host & Port:</td><td style=\"padding: 10px 14px; color: #1E293B;\">smtp.gmail.com:587 (TLS Active)</td></tr>"
                + "</table>"
                + "<div style=\"margin-top: 24px; text-align: center;\">"
                + "<a href=\"https://www.aasaanerp.com/#/admin\" style=\"background: #2563EB; color: #ffffff; text-decoration: none; padding: 10px 22px; border-radius: 8px; font-weight: bold; font-size: 14px;\">Open Admin Dashboard</a>"
                + "</div>"
                + "<p style=\"margin-top: 24px; font-size: 12px; color: #94A3B8; text-align: center;\">Sent automatically by Aasaan ERP Spring Boot Backend.</p>"
                + "</div>";

        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");
            helper.setFrom(defaultSenderEmail, "Aasaan ERP Notifications");
            helper.setTo(target);
            helper.setSubject(subject);
            helper.setText(html, true);
            mailSender.send(message);
            System.out.println("✅ [EmailService] Test email dispatched successfully to: " + target);
            return true;
        } catch (Exception ex) {
            System.err.println("❌ [EmailService] Test email send failed: " + ex.getMessage());
            throw new RuntimeException("SMTP Test Failed: " + ex.getMessage(), ex);
        }
    }

    @SuppressWarnings("unchecked")
    private List<String> resolveRecipients(Map<String, Object> settings) {
        List<String> list = new ArrayList<>();
        if (settings == null) return list;

        if (settings.get("recipientEmails") instanceof List) {
            List<?> rawList = (List<?>) settings.get("recipientEmails");
            for (Object obj : rawList) {
                if (obj != null && !String.valueOf(obj).trim().isBlank()) {
                    list.add(String.valueOf(obj).trim());
                }
            }
        } else if (settings.get("recipientEmail") != null) {
            String raw = String.valueOf(settings.get("recipientEmail"));
            for (String part : raw.split(",")) {
                if (!part.trim().isBlank()) {
                    list.add(part.trim());
                }
            }
        }
        return list;
    }

    private String buildLeadEmailHtml(
            String name,
            String company,
            String email,
            String phone,
            String solution,
            String country,
            String message,
            String timestamp,
            String sender
    ) {
        return "<div style=\"font-family: Arial, Helvetica, sans-serif; max-width: 650px; margin: 0 auto; padding: 24px; border: 1px solid #E2E8F0; border-radius: 12px; background: #FFFFFF;\">"
                + "<div style=\"background: linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%); color: #FFFFFF; padding: 20px 24px; border-radius: 8px 8px 0 0;\">"
                + "<div style=\"font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; color: #93C5FD; margin-bottom: 4px;\">Aasaan ERP Website Demo Request</div>"
                + "<h2 style=\"margin: 0; font-size: 22px; font-weight: 800; color: #FFFFFF;\">🚨 New Lead Captured</h2>"
                + "</div>"
                + "<div style=\"padding: 20px 4px 10px;\">"
                + "<p style=\"font-size: 14.5px; color: #334155; line-height: 1.5; margin: 0 0 16px;\">"
                + "A new visitor has submitted a demo inquiry on the official Aasaan ERP website. Details are provided below:"
                + "</p>"
                + "<table style=\"width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 20px;\">"
                + "<tr style=\"background: #F8FAFC;\"><td style=\"padding: 10px 14px; font-weight: 700; color: #475569; width: 34%; border-bottom: 1px solid #E2E8F0;\">Lead Name</td><td style=\"padding: 10px 14px; font-weight: 700; color: #1E293B; border-bottom: 1px solid #E2E8F0;\">" + name + "</td></tr>"
                + "<tr><td style=\"padding: 10px 14px; font-weight: 700; color: #475569; border-bottom: 1px solid #E2E8F0;\">Company Name</td><td style=\"padding: 10px 14px; color: #1E293B; border-bottom: 1px solid #E2E8F0;\">" + company + "</td></tr>"
                + "<tr style=\"background: #F8FAFC;\"><td style=\"padding: 10px 14px; font-weight: 700; color: #475569; border-bottom: 1px solid #E2E8F0;\">Work Email</td><td style=\"padding: 10px 14px; color: #2563EB; font-weight: 600; border-bottom: 1px solid #E2E8F0;\"><a href=\"mailto:" + email + "\" style=\"color: #2563EB; text-decoration: none;\">" + email + "</a></td></tr>"
                + "<tr><td style=\"padding: 10px 14px; font-weight: 700; color: #475569; border-bottom: 1px solid #E2E8F0;\">Phone / WhatsApp</td><td style=\"padding: 10px 14px; color: #1E293B; font-weight: 600; border-bottom: 1px solid #E2E8F0;\">" + phone + "</td></tr>"
                + "<tr style=\"background: #F8FAFC;\"><td style=\"padding: 10px 14px; font-weight: 700; color: #475569; border-bottom: 1px solid #E2E8F0;\">Primary Solution</td><td style=\"padding: 10px 14px; color: #0F172A; font-weight: 700; border-bottom: 1px solid #E2E8F0;\">" + solution + "</td></tr>"
                + "<tr><td style=\"padding: 10px 14px; font-weight: 700; color: #475569; border-bottom: 1px solid #E2E8F0;\">Country / Region</td><td style=\"padding: 10px 14px; color: #1E293B; border-bottom: 1px solid #E2E8F0;\">" + country + "</td></tr>"
                + "<tr style=\"background: #F8FAFC;\"><td style=\"padding: 10px 14px; font-weight: 700; color: #475569; border-bottom: 1px solid #E2E8F0;\">Requirements / Message</td><td style=\"padding: 10px 14px; color: #334155; line-height: 1.5; border-bottom: 1px solid #E2E8F0;\">" + message + "</td></tr>"
                + "<tr><td style=\"padding: 10px 14px; font-weight: 700; color: #475569;\">Submission Time (IST)</td><td style=\"padding: 10px 14px; color: #64748B;\">" + timestamp + "</td></tr>"
                + "</table>"
                + "<div style=\"background: #EFF6FF; border: 1px solid #BFDBFE; border-radius: 8px; padding: 14px 18px; margin-bottom: 24px;\">"
                + "<strong style=\"color: #1E40AF; display: block; margin-bottom: 4px; font-size: 13.5px;\">Quick Actions:</strong>"
                + "<span style=\"font-size: 13px; color: #3B82F6;\">Directly click 'Reply' in your email client to email this lead directly at " + email + ".</span>"
                + "</div>"
                + "<div style=\"text-align: center; margin: 24px 0;\">"
                + "<a href=\"https://www.aasaanerp.com/#/admin\" style=\"background: #2563EB; color: #FFFFFF; font-size: 14px; font-weight: 700; padding: 12px 28px; border-radius: 8px; text-decoration: none; display: inline-block;\">View Lead in Admin Portal</a>"
                + "</div>"
                + "<p style=\"font-size: 12px; color: #94A3B8; text-align: center; margin: 20px 0 0; line-height: 1.5;\">"
                + "Sent securely by Aasaan ERP Backend via <strong>" + sender + "</strong>.<br>"
                + "Aasaan Services Solutions Pvt Ltd · www.aasaanerp.com"
                + "</p>"
                + "</div>"
                + "</div>";
    }
}
