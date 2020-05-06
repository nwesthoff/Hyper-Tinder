import { NextApiRequest, NextApiResponse } from 'next'
import Airtable from 'airtable';

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.AIRTABLE_KEY
});

export default (_: NextApiRequest, res: NextApiResponse) => {
  try {
    const base = Airtable.base(process.env.AIRTABLE_BASE);

    base('Table 1').select({
      // Selecting the first 3 records in Grid view:
      maxRecords: 100
    }).eachPage(function page(records, fetchNextPage) {
  
      res.status(200).json(records)
    });


    
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}
