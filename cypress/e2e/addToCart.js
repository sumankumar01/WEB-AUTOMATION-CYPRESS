import { Given, When, Then,Before, After } from "@badeball/cypress-cucumber-preprocessor";


//This is cucumber hook. It runs after mocha before all hook
Before(() => {
    cy.log('cucumber before hook to run before each scenario');
  });
//This is cucumber hooks. it runs before mocha after all
  After(() => {
    cy.log('cucumber after hook to run after each scenario');
  });

  Before({tags:"@hook-feature"},() => {
    cy.log('cucumber after hook for one feature only ');
  });

  After({tags:"@hook-feature"},()=> {
    cy.log('cucumber before hook for one feature only');
  });

  //Cucumber hooks with tags
  Before({tags:"@negative"},() =>{
  cy.log("Cucumber before with tag - Only runs before negative test case")
  })

  //This is mocha hook. 
  beforeEach(() => {
    cy.log('mocha hook to run before each scenario');
  });
  
  //Mocha hook to run after each scenario
  afterEach(() => {
    cy.log('Mocha hook to run after each scenario');
  });

  //Mocha hook to run once before all scenarios in feature file
  before(() => {
    cy.log("Mocha Before - Once for a feature file(beforeAll)")
  })

  //Mocha hook to run after all scenarios in feature file
  after(()=> {
    cy.log("Mocha After - Once after a feature file scenarios(afterAll)")
  })



Given("I visit google page", () => {
  const userBaseUrl = Cypress.env('url') 
  cy.visit(userBaseUrl);
  console.log("Hello world!");

});