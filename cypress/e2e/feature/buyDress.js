import { Given, When, Then,Before, After } from "@badeball/cypress-cucumber-preprocessor";

Given("I visit application page and register to application with {string} and {string}", function (username, password) {
   
    const userBaseUrl = Cypress.env('url') 
    cy.visit(userBaseUrl);
    cy.get('a[title="Women"][class="sf-with-ul"]').click()
    cy.get('.login').click()
    cy.get('#email_create').click()
  });

