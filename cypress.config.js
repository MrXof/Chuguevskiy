const { defineConfig } = require("cypress");
const {addMatchImageSnapshotPlugin} = require('cypress-image-snapshot/plugin');
module.exports = defineConfig({
  viewportHeight:1080,
  viewportWidth:1920,

  e2e: {
    setupNodeEvents(on, config) {
      addMatchImageSnapshotPlugin(on, config);
    },
    excludeSpecPattern: ['**//cypress/e2e/1-getting-started','**/cypress/e2e/2-advanced-examples'],
    //retries:2,
    watchFormFileChange:false,
    pageLoadTimeout:3000,
    screenshotOnRunFailureL:false,
    slowTestThreshold:10000,
    

  },
});
