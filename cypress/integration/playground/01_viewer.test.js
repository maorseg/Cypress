/// <reference types="cypress" />

describe("Testing E2E viwer frirst test", () => {
 
    beforeEach('visit the-internet.herokuapp',  () => {
      cy.visit('https://prelog-tenant04.guardian-stg.cellebrite.cloud/index.php')
  
    });
  
    it("should show seccesfull messages when login and logged out", () => {   
        cy.get('#txtUsername').type('Maor.Segev@cellebrite.com')
        cy.get('#txtPassword').type('Command33!!')
        cy.get('#btnLogin').click()
        cy.get('#txtOTP')
        .should('be.visible')
        
        // cy.get('form').submit() 
        // cy.get('#flash') 
        //   .should('be.visible')
        //   .should('contain', 'You logged into a secure area!') 
        // cy.get('h2')
        //   .should('be.visible')
        //   .should('contain', 'Secure Area')
        // cy.get('.subheader')
        //   .should('be.visible')
        //   .should('contain', 'Welcome to the Secure Area. When you are done click logout below.')
        // cy.get('.button').click()
        // cy.get('#flash')
        //   .should('be.visible')
        //   .should('contain', 'You logged out of the secure area!')
          })    
      })