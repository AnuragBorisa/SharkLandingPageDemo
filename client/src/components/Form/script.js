const { GoogleSpreadsheet } = require('google-spreadsheet');
const { JWT } = require('google-auth-library');
const creds = require('./credential.json');

const serviceAccountAuth = new JWT({
  email: creds.client_email,
  key: creds.private_key,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const doc = new GoogleSpreadsheet(
  "1mxMIVstJY7AgxqktMT4PfCWeRwc6nbGkKf5jpMv43DM",
  serviceAccountAuth
);


async function accessSpreadsheet() {
  // Load the document properties and worksheets
  
  await doc.loadInfo();
  console.log(doc.title);

  const sheet = doc.sheetsByIndex[0];

  // Read rows
  const rows = await sheet.getRows();
  rows.forEach(row => {
    console.log(row._rawData);
  });

  // Add a row
//   await sheet.addRow({ "ID": "3446", "FirstName": "Robert", "LastName": "J", "Status": "Pass" });
//   await sheet.addRow({ "ID": "34237", "FirstName": "Test23", "LastName": "J1", "Status": "Pass" });
//   console.log("Added")
 

// const rowsToAdd = [
//     { "ID": "106", "FirstName": "Robert", "LastName": "J", "Status": "Pass" },
//     { "ID": "107", "FirstName": "Test23", "LastName": "J1", "Status": "Pass" }
//   ];

//   // Add rows sequentially
//   for (const rowData of rowsToAdd) {
//     await sheet.addRow(rowData);
//   }

//   console.log("After Adding")
//   const rows2 = await sheet.getRows();
//   rows2.forEach(row => {
//     console.log(row._rawData);
//   });



  function addRow(rowData, callback) {
    sheet.addRow(rowData,{
        
    }).then(() => {
      console.log(`Added row: ${JSON.stringify(rowData)}`);
      if (callback) callback();
    }).catch(err => {
      console.error(`Error adding row: ${JSON.stringify(rowData)}`, err);
    });
  }

  // Add rows using the callback function
//   addRow({ "ID": "106", "FirstName": "Robert", "LastName": "J", "Status": "Pass" }, () => {
//     addRow({ "ID": "107", "FirstName": "Test23", "LastName": "J1", "Status": "Pass" }, () => {
//       // Delete a row after adding the new rows
//     //   sheet.deleteRow(5).then(() => {
//     //     console.log('Deleted row 5');
//     //   }).catch(err => {
//     //     console.error('Error deleting row 5', err);
//     //   });
//     });
//   });


  // Delete a row
//   await sheet.delete;
}

accessSpreadsheet();
