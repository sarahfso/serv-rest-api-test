const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    configFile: "reporter-config.json"
  },
  e2e: {
    baseUrl: 'https://serverest.dev',
    specPattern: "cypress/api/*.cy.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
