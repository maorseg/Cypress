/// <reference types="cypress" />

describe("Testing E2E web site login page", () => {
 
  beforeEach('visit the-internet.herokuapp',  () => {
    cy.visit('https://the-internet.herokuapp.com/login')

  });

  it("should verify we are at the correct page", () => {    
     cy.title().should('eq', 'The Internet')
     cy.url().should('include','login')

  });

  it("should show error message when username is invalid", () => {    
      cy.get('#username').type('fake_user_name')
      cy.get('#password').type('fake_password')
      cy.get('form').submit() 
      cy.get('#flash') 
        .should('be.visible') 
        .should('contain', 'Your username is invalid!')
  });

  it("should show error message when password is invalid", () => {    
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('fake_password')
    cy.get('form').submit() 
    cy.get('#flash') 
      .should('be.visible') 
      .should('contain', 'Your password is invalid!')
  });

   it("should show seccesfull messages when login and logged out", () => {   
      cy.get('#username').type('tomsmith')
      cy.get('#password').type('SuperSecretPassword!')
      cy.get('form').submit() 
      cy.get('#flash') 
        .should('be.visible')
        .should('contain', 'You logged into a secure area!') 
      cy.get('h2')
        .should('be.visible')
        .should('contain', 'Secure Area')
      cy.get('.subheader')
        .should('be.visible')
        .should('contain', 'Welcome to the Secure Area. When you are done click logout below.')
      cy.get('.button').click()
      cy.get('#flash')
        .should('be.visible')
        .should('contain', 'You logged out of the secure area!')
        })    
    })