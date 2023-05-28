const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "fd3i18",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://dev.omni-dispatch.com'
  },
});
