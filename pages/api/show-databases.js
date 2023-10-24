import { getSession } from 'next-auth/react';
import { query } from "../../lib/db";
import multiparty from 'multiparty';

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req, res) {
    try {
        const session = await getSession({ req });

        // Check if the user is an admin
        const isAdmin = session && session.user && session.user.email === process.env.ADMIN_EMAIL;

        if (!isAdmin) {
            return res.status(403).json({ message: 'Access Denied. Requires admin credentials.' });
        }

        const form = new multiparty.Form(); 

        form.parse(req, async (err, fields) => {
            if (err) {
                return res.status(500).json({ message: 'Error parsing form data.' });
            }

            const imageType = fields.imageType[0] ? fields.imageType[0].toString() : '';

            const querySql = 'SELECT * FROM shop WHERE imageType = ?';
            const valueParams = [imageType];
           // console.log('value:', valueParams); 
          //  console.log('SQL Query:', querySql);

            const data = await query({ query: querySql, values: valueParams });

            //console.log('Result:', data.results); 

            res.status(200).json(data);
        });
    } catch (error) {
        console.error('Error fetching images:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
