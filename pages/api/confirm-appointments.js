import { query } from "../../lib/db";


export default async function handler(req, res) {
    try{

        
        if (req.method === "GET") {
            const { status } = req.query;
            //const querySql = "SELECT title, DATE_FORMAT(start_time, '%a %b %d %Y %h:%i:%s %p') as start_time, DATE_FORMAT(end_time, '%a %b %d %Y %h:%i:%s %p') as end_time FROM appointments";
            const querySql = "SELECT * FROM appointmentRequest WHERE status = ?"
            //const valueParams = [];
            const data = await query({ query: querySql, values: [status] });
           res.status(200).json({ appointments: data });

            //console.log(data);
        }


        else if (req.method === "PUT") {
            

            const { id } = req.query;
            const { status } = req.query;
           // console.log(userId, status);
            const querySql = "UPDATE appointmentrequest SET status = ? WHERE id = ?"
           // const insertParams = [status, userId];
            const result = await query({ query: querySql, values: [status, id]});
            res.status(200).json({appointments: result});
        }
        
    } catch (error) {
        // unhide to check error
        res.status(500).json({ error: error.message });
    }
}