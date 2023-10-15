const plugins = require('cypress-social-logins').plugins;

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        GoogleSocialLogin: plugins.GoogleSocialLogin, // listens for GoogleSocialLogin task in tests
      });
    },
    baseUrl: 'http://localhost:3000',
    chromeWebSecurity: false, // allow Cypress to access cross-domain URLs such as NextAuth.js login provider pages
  },
};