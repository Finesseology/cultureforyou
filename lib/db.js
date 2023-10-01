import mysql from "mysql2/promise";

// Create a connection pool
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    waitForConnections: true,
    connectionLimit: 10, // Adjust the limit as needed
});

export async function query({ query, values = [] }) {
    const connection = await pool.getConnection();
    try {
        const [results] = await connection.execute(query, values);
        return { status: "success", results };
    } catch (error) {
        return { status: "error", error: error.message };
    } finally {
        connection.release(); // Release the connection back to the pool
    }
}
