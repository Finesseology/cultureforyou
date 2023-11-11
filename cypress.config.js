const { defineConfig } = require("cypress");
const mysql = require ("mysql2");
const { GoogleSocialLogin } = require("cypress-social-logins").plugins;
const { queryTestDB } = require ('./cypress/plugins/index');

module.exports = defineConfig({
	e2e: {
		baseUrl: "http://localhost:3000/",
		chromeWebSecurity: false,
		setupNodeEvents(on, config) {
			//implement node event listeners here
			on("task", {
				GoogleSocialLogin: GoogleSocialLogin,
			});
			
			on("task", {
				queryDB: (query) =>{
					const result = queryTestDB(query, config);

					return result;
				}
			})
		},
	},
});
