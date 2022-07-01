
import { google } from 'googleapis';

async function handler(req, res) {
    try{
        const auth = new google.auth.GoogleAuth({
            credentials: {
              client_email: process.env.client_email,
              client_id: process.env.client_id,
              private_key: process.env.private_key.replace(/\\n/g, '\n'),
            },
            scopes: [
              'https://www.googleapis.com/auth/drive',
              'https://www.googleapis.com/auth/drive.file',
              'https://www.googleapis.com/auth/spreadsheets',
            ],
          });
      
          const sheets = google.sheets({
            auth,
            version: 'v4',
          });
      
          const response = await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.DATABASE_ID,
            range: 'Companies!2:997', // sheet name
          });
          const rows = response.data.values;
          if (rows.length) {
            return res.status(200).json(rows.map((row)=>({
                "Name": row[0],
                "funding": row[1],
                "S1": row[2],
                "S2": row[3],
                "S3": row[4],
                "S4": row[5],
                "Stage": row[6],
                "Sector": row[7],
                "Valuation": row[8],
                "Shortbrief": row[9],
                "LinkedIn": row[10],
                "Website": row[11],
                "Logo": row[12]
            })));
            // return res.status(200).json({message:"hello"});
          }
      
    }catch(e){
        console.log(e)
        res.status(500).send(e)
    }

}

export default handler;