// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { query } from "../../lib/db";

export default async function handler(req, res) {
    try {
        const querySql = "SELECT appointmentId,user,appointmentTitle,appointmentStart,appointmentEnd FROM appointments";
        const valueParams = [];
        const data = await query({ query: querySql, values: [valueParams] });

        res.status(200).json({ appointments: data });
    } catch (error) {
        // unhide to check error
        res.status(500).json({ error: error.message });
    }

}
