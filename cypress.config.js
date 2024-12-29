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
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
  charts: true, //Genarates Chart in HTML report
  reportPageTitle: 'OpenCart Test Report', //Report title will be set to the mentioned string
  embeddedScreenshots: true, //Screenshot will be embedded within the report
  inlineAssets: true, //No separate assets folder will be created
  videoOnFailOnly: false, //If Videos are recorded and added to the report, setting this to true will add the videos only to tests with failures.
},

  retries: {
    runMode: 1,

  },
  



  e2e: {
    setupNodeEvents,
    specPattern: 'cypress/e2e/feature/*.feature'

  },
  
});
