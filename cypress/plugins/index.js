const mysql = require("mysql2");

function queryTestDB(query, config) {

    const connection = mysql.createConnection(config.env.db);

    //start the connection
    connection.connect();

    // run the query and then end the connection
    return new Promise((resolve, reject) => {
        connection.query(query, (error, results) => {
            if (error) reject(error);
            else {
                connection.end();
                return resolve(results);
            }
        });
    })
}

module.exports =  {

    queryTestDB,

};
