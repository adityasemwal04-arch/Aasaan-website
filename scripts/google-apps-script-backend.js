function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = {};

    if (e && e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    var timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    // 1. Append lead row into Google Sheet
    sheet.appendRow([
      timestamp,
      data.name || "",
      data.company || "",
      data.email || "",
      data.phone || "",
      data.solution || "ERP Global",
      data.country || "India",
      data.message || "",
      "New Demo Lead"
    ]);

    // 2. Automatically send confirmation email from your Gmail account to the client
    if (data.email && data.email.indexOf("@") !== -1) {
      var clientName = data.name ? data.name : "Valued Customer";
      var clientSolution = data.solution ? data.solution : "Aasaan ERP";
      var clientCompany = data.company ? data.company : "your organization";

      var emailSubject = "Thank You for Contacting Aasaan ERP - Demo Request Received";

      var plainTextBody = "Hi " + clientName + ",\n\n" +
        "Thank you for registering and submitting your query for " + clientSolution + ".\n\n" +
        "We have safely received your details. Our solution engineering team is reviewing your requirements and will shortly get back to you within 2 business hours.\n\n" +
        "Query Details:\n" +
        "• Company: " + clientCompany + "\n" +
        "• Solution: " + clientSolution + "\n" +
        "• Phone / WhatsApp: " + (data.phone || "N/A") + "\n\n" +
        "If you have any immediate questions, feel free to reply directly to this email.\n\n" +
        "Warm regards,\n" +
        "Aasaan ERP Team\n" +
        "Aasaan Services Solutions Pvt Ltd\n" +
        "https://www.aasaanerp.com";

      var htmlEmailBody = 
        '<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #E2E8F0; border-radius: 12px; overflow: hidden; color: #1E293B;">' +
          '<div style="background: #0B1329; color: #FFFFFF; padding: 24px 28px; text-align: left;">' +
            '<h2 style="margin: 0; font-size: 20px; font-weight: 800; color: #FFFFFF;">Aasaan ERP</h2>' +
            '<p style="margin: 6px 0 0; font-size: 13px; color: #94A3B8;">Next-Generation Cloud ERP & Waste Management Solutions</p>' +
          '</div>' +
          '<div style="padding: 28px;">' +
            '<p style="font-size: 15px; line-height: 1.5; margin-top: 0;">Hi <strong>' + clientName + '</strong>,</p>' +
            '<p style="font-size: 14.5px; line-height: 1.6; color: #334155;">' +
              'Thank you for registering and submitting your query for <strong>' + clientSolution + '</strong>. ' +
              'We have safely received your request, and our solution engineering team will shortly get back to you within <strong>2 business hours</strong>.' +
            '</p>' +
            '<div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px; padding: 16px; margin: 20px 0;">' +
              '<div style="font-size: 12px; font-weight: 700; color: #2563EB; text-transform: uppercase; margin-bottom: 8px;">Your Submission Summary</div>' +
              '<div style="font-size: 13.5px; line-height: 1.6; color: #475569;">' +
                '• <strong>Company:</strong> ' + clientCompany + '<br>' +
                '• <strong>Product / Solution:</strong> ' + clientSolution + '<br>' +
                '• <strong>Phone / WhatsApp:</strong> ' + (data.phone || "N/A") + '<br>' +
                (data.message ? '• <strong>Note:</strong> ' + data.message : '') +
              '</div>' +
            '</div>' +
            '<p style="font-size: 14px; line-height: 1.5; color: #475569;">' +
              'If you have any urgent queries, simply reply directly to this email or reach us at <a href="mailto:contactus@aasaanservices.in" style="color: #2563EB; text-decoration: none;">contactus@aasaanservices.in</a>.' +
            '</p>' +
            '<hr style="border: none; border-top: 1px solid #E2E8F0; margin: 24px 0;">' +
            '<p style="font-size: 13px; color: #64748B; margin-bottom: 0;">' +
              'Best regards,<br>' +
              '<strong>Aasaan ERP Solutions Team</strong><br>' +
              'Aasaan Services Solutions Pvt Ltd<br>' +
              '<a href="https://www.aasaanerp.com" style="color: #2563EB; text-decoration: none;">www.aasaanerp.com</a>' +
            '</p>' +
          '</div>' +
        '</div>';

      MailApp.sendEmail({
        to: data.email,
        subject: emailSubject,
        body: plainTextBody,
        htmlBody: htmlEmailBody,
        name: "Aasaan ERP Team"
      });

      // 3. Also notify Admin inbox immediately
      var adminEmail = "adityasemwal04@gmail.com";
      var adminSubject = "🚨 New Aasaan ERP Demo Request: " + clientName + " (" + clientCompany + ")";
      var adminBody = "New Demo Lead Submitted from Website!\n\n" +
        "• Name: " + clientName + "\n" +
        "• Company: " + clientCompany + "\n" +
        "• Email: " + (data.email || "N/A") + "\n" +
        "• Phone / WhatsApp: " + (data.phone || "N/A") + "\n" +
        "• Solution: " + clientSolution + "\n" +
        "• Country: " + (data.country || "India") + "\n" +
        "• Message: " + (data.message || "N/A") + "\n" +
        "• Timestamp: " + timestamp + "\n\n" +
        "Access Admin Dashboard: https://adityasemwal04-arch.github.io/Aasaan-website/#/admin";

      try {
        MailApp.sendEmail({
          to: adminEmail,
          subject: adminSubject,
          body: adminBody,
          name: "Aasaan Lead Alert"
        });
      } catch (adminMailErr) {
        Logger.log("Admin email send error: " + adminMailErr);
      }
    }

    return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var values = sheet.getDataRange().getValues();
    var leads = [];

    // Skip header row at index 0
    for (var i = 1; i < values.length; i++) {
      var row = values[i];
      if (row[0] || row[1] || row[3]) {
        leads.push({
          id: i + 1000,
          timestamp: row[0] ? row[0].toString() : "",
          name: row[1] ? row[1].toString() : "",
          company: row[2] ? row[2].toString() : "",
          email: row[3] ? row[3].toString() : "",
          phone: row[4] ? row[4].toString() : "",
          solution: row[5] ? row[5].toString() : "ERP Global",
          country: row[6] ? row[6].toString() : "India",
          message: row[7] ? row[7].toString() : "",
          status: row[8] ? row[8].toString() : "New Demo Lead"
        });
      }
    }

    return ContentService.createTextOutput(JSON.stringify(leads))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify([]))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// RUN THIS FUNCTION ONCE IN THE APPS SCRIPT EDITOR TO GRANT EMAIL PERMISSION
function testEmail() {
  var myEmail = Session.getActiveUser().getEmail();
  MailApp.sendEmail({
    to: myEmail,
    subject: "Aasaan ERP - Email Permission Test",
    body: "Authorization successful! Auto-responder is now fully enabled."
  });
  Logger.log("Test email sent to: " + myEmail);
}
