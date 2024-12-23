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



Given("I visit application page", () => {
  const userBaseUrl = Cypress.env('url') 
  cy.visit(userBaseUrl);
  cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').first().click();
  cy.get('.product_list  .product-container img').first().click();
  cy.get('#group_1').select('M').should('have.value', '2')
  cy.get('.span_link').click();

  cy.get('.fancybox-inner > img').should('have.attr','src','http://www.automationpractice.pl/img/p/8/8-thickbox_default.jpg')
  cy.get("a[title='Close']").click();
  cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').first().click();
  cy.get('img[src*="10-home_default.jpg"]').click();
  cy.get('#group_1').select('M').should('have.value', '2')
  cy.get('.color_pick[name="Pink"]').click();
  cy.get("button[class='exclusive']").click();
  cy.get("a[title='Proceed to checkout']").click();

});