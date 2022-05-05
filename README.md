# Export Google Spreadsheet rows as single lines in a TXT File in Google App Script.

1. Create and populate a spreadsheet
2. Open appscript
3. Paste the code
4. Authorize it
5. You're good to go

In our scenario we had a custom menu in the front-end created with the following function and a trigger that fires it on Spreadsheet open.


function createMenu() {
   var menu = SpreadsheetApp.getUi().createMenu("Custom scripts");
   menu.addItem("Download TXT", "downloadTXT");
   menu.addToUi();
}

