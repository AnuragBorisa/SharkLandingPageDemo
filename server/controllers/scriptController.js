import {GoogleSpreadsheet} from 'google-spreadsheet'
import { JWT } from 'google-auth-library';
import creds from '../credential.json' with { type: "json" };

const serviceAccountAuth = new JWT({
  email: creds.client_email,
  key: creds.private_key,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const doc = new GoogleSpreadsheet('1mxMIVstJY7AgxqktMT4PfCWeRwc6nbGkKf5jpMv43DM', serviceAccountAuth);

async function accessSpreadsheet(req, res) {
  try {

  const {fullName,email, phoneNumber} = req.body;
  await doc.loadInfo();
  console.log(doc.title);

  const sheet = doc.sheetsByIndex[0];

  await sheet.addRow({ "FullName": fullName, "Email": email, "PhoneNumber": phoneNumber });
  console.log("Added")
  res.status(200).send("Success");
  } catch (error) {
    console.error('Error accessing spreadsheet:', error);
    res.status(500).send('Failed to access spreadsheet');
  }
}

export default accessSpreadsheet