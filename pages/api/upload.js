import multiparty from 'multiparty';
import fs from 'fs';
import path from 'path';

export const config = {
    api: {
        bodyParser: false, 
    },
};

const MAX_FILE_SIZE = 500 * 1024 * 1024; // 500MB (adjust as needed)
const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/gif'];

export default async function handler(req, res) {
    if (req.method === 'POST') {
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

            const uploadPath = path.join(process.cwd(), 'public', 'uploaded-files', file.originalFilename);

            fs.rename(file.path, uploadPath, (renameErr) => {
                if (renameErr) {
                    return res.status(500).json({ message: 'Error moving uploaded file.' });
                }

                res.status(200).json({ message: 'File uploaded successfully' });
            });
        });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}

