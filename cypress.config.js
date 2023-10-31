const { defineConfig } = require("cypress");
const { GoogleSocialLogin } = require("cypress-social-logins").plugins;
//const { GoogleSocialLogin } = require("cypress-social-logins/src/Plugins");

module.exports = defineConfig({
	e2e: {
		baseUrl: "http://localhost:3000/",
		chromeWebSecurity: false,
		setupNodeEvents(on, config) {
			// implement node event listeners here
			on("task", {
				GoogleSocialLogin: GoogleSocialLogin,
			});
		},
	},
});
