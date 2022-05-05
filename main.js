
function downloadTXT() {
  // Let's define our sheet/tab inside the spreadsheet.
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("YOUR_GSHEET_TAB");
  
  // Defining our data range: Row, Column, Number of rows, Number of columns. Getting the content too.
  var rangeData = sheet.getRange(1, 1, sheet.getLastRow(), sheet.getLastColumn()).getValues();

  // Some loop preparations
  var lastRow = sheet.getLastRow();
  var fileContent = [];
  
  // A loop to have one row per line in or file. Mandatory in some (our) case.
  for (var i = 0; i < lastRow; i++) {
      fileContent += rangeData[i][0]+"\n"; 
    }
    
  // Creating the file
  var file = DriveApp.createFile("filename.txt",fileContent , "text/plain");
  
  // A simple alert for our user. This make sense only if you're creating a Custom Menu aswell.
  var file_url = "https://drive.google.com/file/d/"+ file.getId() +"/view?usp=sharing"
  SpreadsheetApp.getUi().alert("Here's your file! \n"+file_url);

}
