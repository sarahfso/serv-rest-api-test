const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    configFile: "reporter-config.json",
    mochaFile: "./cypress/results/cypress-output.[hash].xml"
  },
  e2e: {
    baseUrl: 'https://serverest.dev',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
