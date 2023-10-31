const { defineConfig } = require("cypress");
const mysql = require ("mysql2");

module.exports = defineConfig({
	e2e: {
		baseUrl: "http://localhost:3000/",
		setupNodeEvents(on, config) {
			// implement node event listeners here
			on("task", {
				queryDB: (query) =>{
					return queryTestDB (query, config);
				}
			})
		},
		"env": {
			"db": {
				host: process.env.DB_HOST,
				database: process.env.DB_NAME,
				user: process.env.DB_USER,
				password: process.env.DB_PASS,
			}
		},
	},
});


function queryTestDB (query, config) {

const connection = mysql.createConnection(config.env.db);

//start the connection
connection.connect();

// run the query and then end the connection
	return new Promise((resolve, reject) =>{
		connection.query(query, (error, results)=>{
			if(error) reject (error);
			else {
				connection.end();
				return resolve(results);
			}
		});
	})
}