const { defineConfig } = require("cypress");
const browserify = require("@cypress/browserify-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprendTransformerToOptions,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);
  on(
    "file:preprocessor",
    browserify(preprendTransformerToOptions(config, browserify.defaultOptions)),
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}


module.exports = defineConfig({
  defaultCommandTimeout: 6000,

  env: {
    url: "http://www.automationpractice.pl/index.php",
  },
   reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },

  //The number of times to retry a failing test. Can be configured to apply to cypress run or cypress open separately.
  //If you want to configure retry attempts on a specific test or suite, you can set this by using the test's/suite's configuration.
  retries : {
    // Configure retry attempts for `cypress run`
    // Default is 0
    runMode: 1,
    // Configure retry attempts for `cypress open`
    // Default is 0
    openMode : 1
  },
  



  e2e: {
    setupNodeEvents,
    specPattern: 'cypress/e2e/feature/*.feature'

  },
  
});
