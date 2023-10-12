import multiparty from 'multiparty';
import fs from 'fs';
import path from 'path';
import { getSession } from "next-auth/react";
import { query } from "../../lib/db";

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req, res) {
    if (req.method === 'POST') {
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

                const { imageName, imageType, title } = fields;
              //  console.log('Fields:', fields);
               

                const querySql2 = 'DELETE FROM shop WHERE imageType = ? AND imageTitle = ?';
                const valueParams2 = [imageType[0], title[0]];
                


                const querySql = 'SELECT * FROM shop WHERE imageName = ? AND imageType = ?';
                const valueParams = [imageName[0], imageType[0]]; 
                //console.log('query: ' + querySql);
               // console.log('Values: ' + valueParams);
                const result = await query({ query: querySql, values: valueParams });


                console.log('Results: ' + result.results);
                if (result.status === 'success') {
                    const rowCount = result.results.length;
                    //console.log('Count: ' + rowCount);

                    if (rowCount === 1) {
                        // Define the path to the image based on imageType
                        let imagePath;

                        if (imageType[0] === 'weddingSign') {
                            imagePath = path.join(process.cwd(), 'public', 'weddingsPics', imageName[0]);
                        } else if (imageType[0] === 'engraving') {
                            imagePath = path.join(process.cwd(), 'public', 'engravingPics', imageName[0]);
                        } else if (imageType[0] === 'topper') {
                            imagePath = path.join(process.cwd(), 'public', 'topperPics', imageName[0]);
                        } else if (imageType[0] === 'henna') {
                            imagePath = path.join(process.cwd(), 'public', 'hennaPics', imageName[0]);
                        }

                        //console.log('Image Path:', imagePath);
                        // Use fs.unlink to delete the image
                        fs.unlink(imagePath, (unlinkErr) => {
                            if (unlinkErr) {
                                console.error('Error deleting the image:', unlinkErr);
                            } else {
                                console.log('Image deleted successfully.');
                            }
                        });
                    }
                }

                const result2 = await query({ query: querySql2, values: valueParams2 });

                if (result2.status === 'success') {
                    const affectedRows = result2.results.affectedRows;

                    if (affectedRows === 1) {
                        res.status(200).json({ message: 'Successful Deletion' });
                    } else {
                        res.status(404).json({ message: 'Row not found or not deleted.' });
                    }
                } else {
                    res.status(500).json({ message: 'Deletion Fails' });
                }
            });
        } catch (error) {
            res.status(500).json({ message: 'Server error' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
