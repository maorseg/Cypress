
/// <reference types="cypress" />

describe("Visual test for username is invalid ", () => {
 
  before('visit the-internet.herokuapp', function() {
    cy.visit('https://the-internet.herokuapp.com/login')

  });

  it("should show error message when username is invalid", () => {    
    cy.eyesOpen({
      appName: 'Demo Applitools',
      testName: 'herokuapp homepage',
    });
    
    cy.get('#username').type('fake_user_name')
    cy.get('#password').type('fake_password')
    cy.get('form').submit() 
    cy.get('#flash') 
      .should('be.visible') 

      cy.eyesCheckWindow({ tag: 'Home Page' });
      // check result in Applitools Dashboard
      // https://eyes.applitools.com/app/test-results/
      cy.eyesClose();
     
    });
  });

  