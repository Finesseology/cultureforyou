// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getSession } from 'next-auth/react';
import { query } from "../../lib/db";

export default async function handler(req, res) {
    try {
        const session = getSession({ req });
        if (!session) {
            res.status(401).json({ message: 'Unauthorized' });
            return;
        }
        const querySql = "SELECT appointment_id,firstName,lastName,email,start_time,end_time,date FROM appointments inner join user on appointments.userID = user.userID ORDER BY date,start_time ";
        const valueParams = [];
        const data = await query({ query: querySql, values: [valueParams] });

        res.status(200).json({ appointments: data });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}