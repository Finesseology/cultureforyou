import mysql from "mysql2/promise";

export async function query({ query, values = [] }) {
	const dbconnection = await mysql.createConnection({
		host: "process.env.DB_HOST",
		database: "process.env.DB_NAME",
		user: "process.env.DB_USER",
		password: "process.env.DB_PASS",
		//socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
	});
	
	try {
		const [results] = await dbconnection.execute(query, values);
		dbconnection.end();
		return results;
	} catch (error) {
		throw Error(error.message);
		return { error };
	}
}
