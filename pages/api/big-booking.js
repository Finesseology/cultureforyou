import { query } from "../../lib/db";
import moment from 'moment';

export default async function handler(req, res) {
    try {
        //Handle GET request to retrieve appointments data

        if (req.method === "GET") {

            const querySql = "Select * from appointments order by id ASC"
            const valueParams = [];
            const data = await query({ query: querySql, values: valueParams });

           res.status(200).json({ appointments: data });
        }

        // Handle POST request to add new event
        if (req.method === "POST") {

            //console.log(req.body.start);
            const id = req.body.id;
            const title = req.body.title;
            const endTime = moment(req.body.end).format('YYYY-MM-DD HH:mm:ss');
            const startTime = moment(req.body.start).format('YYYY-MM-DD HH:mm:ss');


            const insertSql = "INSERT INTO appointments (id, title, start_time, end_time) VALUES (?, ?, ?, ?)";
            const insertParams = [id, title, startTime, endTime];
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
            
            // handle updating the events id after deleting
            const updateSql = "UPDATE appointments SET id = id - 1 WHERE id > ?";
            const updateParams = [eventID];
            const updateData = await query({ query: updateSql, values: updateParams });

            if (delData.affectedRows > 0) {
                res.status(201).json({ message: 'Event Deleted successfully' });
            } else {
                res.status(404).json({ error: 'Failed to delete event' });
            }
            
            // handle error for updating
            if (updateData.affectedRows > 0) {
                res.status(201).json({ message: 'Events updated successfully' });
            } else {
                res.status(404).json({ error: 'Failed to update event' });
            }
        }
    } catch (error) {
        // unhide to check error
        res.status(500).json({ error: error.message });
    }
}

