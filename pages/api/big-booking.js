import { query } from "../../lib/db";
import moment from 'moment';

export default async function handler(req, res) {
    try {
        //Handle GET request to retrieve appointments data

        if (req.method === "GET") {
            //const querySql = "SELECT title, DATE_FORMAT(start_time, '%a %b %d %Y %h:%i:%s %p') as start_time, DATE_FORMAT(end_time, '%a %b %d %Y %h:%i:%s %p') as end_time FROM appointments";
            const querySql = "Select * from appointments"
            const valueParams = [];
            const data = await query({ query: querySql, values: valueParams });

           res.status(200).json({ appointments: data });

            //console.log(data);
        }

        // Handle POST request to add new event
        if (req.method === "POST") {

            //console.log(req.body.start);

            const title = req.body.title;
            const endTime = moment(req.body.end).format('YYYY-MM-DD HH:mm:ss');
            const startTime = moment(req.body.start).format('YYYY-MM-DD HH:mm:ss');

            // const startTime = req.body.start;
            // const endTime = req.body.end;

            // console.log(title);
            // console.log(startTime);
            // console.log(endTime);

            const insertSql = "INSERT INTO appointments (title, start_time, end_time) VALUES (?, ?, ?)";
            const insertParams = [title, startTime, endTime];
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
            const deleteSql = "DELETE FROM appointments WHERE id = ?";
            const deleteParams = [eventID];
            const delData = await query({ query: deleteSql, values: deleteParams });

            //console.log("ID received: " + req.body.id)

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

