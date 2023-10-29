import { query } from "../../lib/db";
import moment from 'moment';

export default async function handler(req, res) {
    try{

        //Print out accepted appointments
        if (req.method === "GET") {
            const querySql = "Select * from appointmentRequest WHERE status = 'accepted' OR status = 'completed'"
            const valueParams = [];
            const data = await query({ query: querySql, values: valueParams });
            res.status(200).json({ appointments: data });
        }

        // Handle POST request to add a new appointment request
        else if (req.method === "POST") {
            // Extract data from the request body
            const { firstName, lastName, email, title, start, end, selectedDate } = req.body;
  
            // Create a combined user name
            const userName = `${firstName} ${lastName}`;
  
            // Format the start and end times
            const startTime = moment(`${selectedDate} ${start}`, 'YYYY-MM-DD h:mm A').format('YYYY-MM-DD HH:mm:ss');
            const endTime = moment(`${selectedDate} ${end}`, 'YYYY-MM-DD h:mm A').format('YYYY-MM-DD HH:mm:ss');
  
            // SQL query to insert data into the appointmentRequest table
            const insertSql = `
                INSERT INTO appointmentRequest (userId, userName, title, start_time, end_time, status)
                VALUES (?, ?, ?, ?, ?, ?)
            `;
    
            // Parameters for the SQL query
            const insertParams = [email, userName, title, startTime, endTime, 'pending'];
  
            // Execute the SQL query
            const result = await query({ query: insertSql, values: insertParams });
  
            // Check if the insertion was successful
            if (result.affectedRows > 0) {
                res.status(201).json({ message: 'Appointment request added successfully' });
            } else {
                res.status(400).json({ error: 'Failed to add appointment request' });
            }
        }
    } catch (error) {
        // unhide to check error
        res.status(500).json({ error: error.message });
    }
}

