import { defineConfig } from "cypress";

export default defineConfig({
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
        charts: true,
        reportPageTitle: 'TOS Cypress Test',
        overwrite: false,
        reportTitle: 'UDI Forms Cypress Test',
        embeddedScreenshots: true,
        inlineAssets: true,
        saveAllAttempts: false,
        reportFilename: '[datetime]-[status]-report',
    },
  e2e: {
    setupNodeEvents(on, config) {
        require('cypress-mochawesome-reporter/plugin')(on);
        require('@cypress/grep/src/plugin')(config);
        return config;
    },
      baseUrl: 'https://forms.int.az.udiutv.no/en/dashboard',
  },
    watchForFileChanges: false,
    video: true,
    viewportHeight: 1080,
    viewportWidth: 1400,
    defaultCommandTimeout: 10000,
});
