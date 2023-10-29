import { query } from "../../lib/db";


export default async function handler(req, res) {
    try{

        
        if (req.method === "GET") {
            const { userId } = req.query;
            //console.log(userId);
            //const querySql = "SELECT title, DATE_FORMAT(start_time, '%a %b %d %Y %h:%i:%s %p') as start_time, DATE_FORMAT(end_time, '%a %b %d %Y %h:%i:%s %p') as end_time FROM appointments";
            const querySql = "SELECT * FROM appointmentrequest WHERE userId = ?"
            //const valueParams = [];
            const data = await query({ query: querySql, values: [userId] });
           res.status(200).json({ appointments: data });

            //console.log(data);
        }


        
    } catch (error) {
        // unhide to check error
        res.status(500).json({ error: error.message });
    }
}