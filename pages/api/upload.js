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

const MAX_FILE_SIZE = 500 * 1024 * 1024; // 500MB (adjust as needed)
const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/gif'];

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

            form.parse(req, async (err, fields, files) => {
                if (err) {
                    return res.status(500).json({ message: 'Error parsing form data.' });
                }

                const file = files.file[0];

                if (!file || file.size <= 0) {
                    return res.status(400).json({ message: 'No files were uploaded.' });
                }

                if (file.size > MAX_FILE_SIZE || !ALLOWED_IMAGE_TYPES.includes(file.headers['content-type'])) {
                    return res.status(400).json({ message: 'Invalid file or file size exceeded.' });
                }

                const { imageType, title, description } = fields;

                if (imageType[0] === 'other')
                {
                    // Handle the "other" case by moving the file to the 'uploads' folder
                    const uploadPath = path.join(process.cwd(), 'public', 'uploads', file.originalFilename);

                    fs.rename(file.path, uploadPath, (renameErr) => {
                        if (renameErr) {
                            return res.status(500).json({ message: 'Error moving uploaded file.' });
                        }

                        res.status(200).json({ message: 'File uploaded successfully to "uploads" folder' });
                    });
                }
                else
                {
                    if (title[0] === "" || title[0] === null) {
                        res.status(500).json({ message: 'Error Title Required' });
                    }

                    const values = [file.originalFilename, imageType[0], title[0], description[0]];

                    const result = await query({ query: 'INSERT INTO shop (imageName, imageType, imageTitle, imageDesc) VALUES (?, ?, ?, ?)', values });
              
                    if (result.status === 'success' && result.results && result.results.constructor.name === 'ResultSetHeader') {
                        const affectedRows = result.results.affectedRows;
                        if (affectedRows > 0) {
                            if (imageType[0] === 'weddingSign') {
                                const uploadPath = path.join(process.cwd(), 'public', 'weddingsPics', file.originalFilename);

                                fs.rename(file.path, uploadPath, (renameErr) => { });
                            }
                            else if (imageType[0] === 'engraving') {
                                const uploadPath = path.join(process.cwd(), 'public', 'engravingPics', file.originalFilename);

                                fs.rename(file.path, uploadPath, (renameErr) => { });
                            }
                            else if (imageType[0] === 'topper') {
                                const uploadPath = path.join(process.cwd(), 'public', 'topperPics', file.originalFilename);

                                fs.rename(file.path, uploadPath, (renameErr) => { });
                            }
                            else if (imageType[0] === 'henna') {
                                const uploadPath = path.join(process.cwd(), 'public', 'hennaPics', file.originalFilename);

                                fs.rename(file.path, uploadPath, (renameErr) => { });
                            }
                            res.status(200).json({ message: 'File uploaded successfully' });

                        } else {
                            res.status(500).json({ message: 'Failed to insert data into the database' });
                        }
                    }
                }
            });
        } catch (error) {
            res.status(500).json({ message: 'Server error' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
