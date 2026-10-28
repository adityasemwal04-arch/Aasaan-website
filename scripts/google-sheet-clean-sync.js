// =========================================================================
// AASAAN ERP - GOOGLE SHEETS CLEAN LEAD SYNC SCRIPT (NO EMAILS)
// =========================================================================
// This script ONLY records demo requests into your Google Sheet.
// It DOES NOT send any emails from your personal Gmail/Google account.
// All email notifications are handled by the official website via FormSubmit.
//
// HOW TO INSTALL / UPDATE IN GOOGLE SHEETS:
// 1. Open your Google Sheet
// 2. Click "Extensions" > "Apps Script" in the top menu
// 3. Delete everything inside the editor and paste this entire code
// 4. Click "Deploy" (top right) > "Manage deployments" > Edit (pencil icon) > Version: "New version" > Click "Deploy"
// =========================================================================

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Auto-create header row if sheet is brand new
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

    // Append lead to spreadsheet
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

    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Lead recorded in Google Sheet successfully"
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
    service: "Aasaan Google Sheet Lead Sync (Clean - No Emails)"
  })).setMimeType(ContentService.MimeType.JSON);
}
