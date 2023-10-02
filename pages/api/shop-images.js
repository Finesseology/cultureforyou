import { query } from '../../lib/db';

export default async function handler(req, res) {
  try {
    const { imageType } = req.query; // Assuming 'imageType' is a parameter in your URL (e.g., /api/shop?imageType=henna)

    // Query the 'shop' table to fetch image data for the specified imageType
    const querySql = 'SELECT * FROM shop WHERE imageType = ?';
    const data = await query({ query: querySql, values: [imageType] }); // Make sure 'query' is defined and connected to the database

    res.status(200).json({ shopimages: data });
  } catch (error) {
    console.error('Error fetching image from the database:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}