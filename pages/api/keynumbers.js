
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
            range: 'Key Numbers', // sheet name
          });
          const rows = response.data.values;
         
            return res.status(200).json(rows[1]);
            // return res.status(200).json({message:"hello"});
          
      
    }catch(e){
        console.log(e)
        res.status(500).send(e)
    }

}

export default handler;