import { query } from "../../lib/db";
import moment from 'moment';

export default async function handler(req, res) {
    try {
        //Handle GET request to retrieve appointments data

        if (req.method === "GET") {

            const querySql = `SELECT id, title, DATE_FORMAT(start_time, '%Y %c %d  %h:%i:%s %p') as start_time, DATE_FORMAT(end_time, '%Y %c %d %h:%i:%s %p') as end_time FROM appointmentRequest WHERE status = 'accepted' OR status = 'completed';`;
            const valueParams = [];
            const data = await query({ query: querySql, values: valueParams });
            res.status(200).json({ appointments: data});
        }

        // Handle POST request to add new event
        if (req.method === "POST") {

            const title = req.body.title;
            const endTime = moment(req.body.end).format('YYYY-MM-DD HH:mm:ss');
            const startTime = moment(req.body.start).format('YYYY-MM-DD HH:mm:ss');
            const userId = req.body.userId;
            const userName = req.body.userName;
            const status = req.body.status;
            

            const insertSql = "INSERT INTO appointmentRequest (userId, userName, title, start_time, end_time, status) VALUES (?, ?, ?, ?, ?, ?)";
            const insertParams = [userId, userName, title, startTime, endTime, status];
            const result = await query({ query: insertSql, values: insertParams });

            console.log("inside params: " + insertParams);

            // Check if the insertion was successful
            if (result.affectedRows > 0) {
                res.status(201).json({ message: 'Event added successfully' });
            } else {
                res.status(400).json({ error: 'Failed to add event' });
            }
        }

        if (req.method === "DELETE") {

            const eventID = req.query.eventID;
            console.log("ID received: " + eventID)   
            const deleteSql = "DELETE FROM appointmentRequest WHERE id = ?";
            const deleteParams = [eventID];
            const delData = await query({ query: deleteSql, values: deleteParams });
            
            if (delData.affectedRows > 0) {
                res.status(201).json({ message: 'Event Deleted successfully' });
            } else {
                res.status(404).json({ error: 'Failed to delete event' });
            }
        }
    } catch (error) {
        // unhide to check error
        res.status(500).json({ error: error.message });
    }
}

