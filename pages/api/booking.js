import { query } from "../../lib/db";

export default async function handler(req, res) {
  
  try {
    const querySql = "SELECT DATE_FORMAT(timeSlots, '%h:%i %p') as time FROM appointments Where available = true";
    const valueParams = [];
    const data = await query({ query: querySql, values: [valueParams] });
    res.status(200).json({ appointments: data });
  } catch (error) {
  // unhide to check error
    res.status(500).json({ error: error.message });
  }
}