// =========================================================================
// AASAAN ERP - OFFICIAL GOOGLE APPS SCRIPT (RUNS UNDER contactus@aasaanservices.in)
// =========================================================================
// DEPLOY THIS USING YOUR HR's LAPTOP (logged into contactus@aasaanservices.in):
//
// 1. Open Google Sheets (or create a new sheet: "Aasaan ERP Website Leads")
// 2. Click "Extensions" > "Apps Script"
// 3. Paste this entire code into Code.gs
// 4. Click "Deploy" (top-right blue button) > "New deployment"
// 5. Select type: "Web app"
//    - Description: Aasaan Official Lead Dispatcher
//    - Execute as: "Me (contactus@aasaanservices.in)"
//    - Who has access: "Anyone"
// 6. Click "Deploy", authorize permissions when prompted.
// 7. Copy the Web App URL (starts with https://script.google.com/macros/s/...)
// 8. Paste that Web App URL into your Aasaan Admin Dashboard > Settings > Webhook URL!
// =========================================================================

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Auto-create header row if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp (IST)",
        "Lead Name",
        "Company Name",
        "Work Email",
        "Phone / WhatsApp",
        "Solution",
        "Country / Region",
        "Message / Requirement",
        "Status"
      ]);
      sheet.getRange(1, 1, 1, 9).setFontWeight("bold").setBackground("#F1F5F9");
    }

    var data = {};
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (parseErr) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    var timestamp = data.timestamp || Utilities.formatDate(new Date(), "Asia/Kolkata", "dd/MM/yyyy, hh:mm:ss a");
    var clientName = data.name || data.fullName || "Anonymous";
    var clientCompany = data.company || data.companyName || "N/A";
    var clientEmail = data.email || "N/A";
    var clientPhone = data.phone || data.mobile || "N/A";
    var clientSolution = data.solution || "Aasaan Enterprises";
    var clientCountry = data.country || data.address || "India";
    var clientMessage = data.message || data.requirement || "N/A";
    var status = data.status || "New Demo Lead";

    // 1. Append lead to Google Sheet
    sheet.appendRow([
      timestamp,
      clientName,
      clientCompany,
      clientEmail,
      clientPhone,
      clientSolution,
      clientCountry,
      clientMessage,
      status
    ]);

    // 2. Dispatch official email notification to Admin Recipients
    // The email will be sent FROM contactus@aasaanservices.in
    var recipients = data.recipientEmails || data.recipientEmail || "contactus@aasaanservices.in, aditya@aasaan.in, neha@aasaan.in";
    var emailSubject = "🚨 New Aasaan ERP Demo Request: " + clientName + " (" + clientCompany + ")";
    var emailBody = "New Demo Lead Submitted from Aasaan Official Website!\n\n" +
      "• Name: " + clientName + "\n" +
      "• Company: " + clientCompany + "\n" +
      "• Work Email: " + clientEmail + "\n" +
      "• Phone / WhatsApp: " + clientPhone + "\n" +
      "• Solution Required: " + clientSolution + "\n" +
      "• Country: " + clientCountry + "\n" +
      "• Requirements / Message: " + clientMessage + "\n" +
      "• Submission Time (IST): " + timestamp + "\n\n" +
      "View in Admin Portal: https://www.aasaanerp.com/#/admin\n" +
      "--------------------------------------------------\n" +
      "Sent automatically by Aasaan ERP Notification System.";

    try {
      MailApp.sendEmail({
        to: recipients,
        replyTo: clientEmail !== "N/A" ? clientEmail : "contactus@aasaanservices.in",
        subject: emailSubject,
        body: emailBody,
        name: "Aasaan ERP Notifications"
      });
    } catch (mailErr) {
      Logger.log("Email dispatch failed: " + mailErr);
    }

    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Lead recorded and notification sent from contactus@aasaanservices.in"
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: err.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: "online",
    sender: "contactus@aasaanservices.in",
    service: "Aasaan Lead Webhook & Official Email Dispatcher"
  })).setMimeType(ContentService.MimeType.JSON);
}
