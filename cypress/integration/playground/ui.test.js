// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="Cypress" />


describe('E2E test', () => {
  
    it.only('clicking "type" shows the right headings', () => {
      cy.visit('https://example.cypress.io')
  
      cy.contains('type').click()
  
      // Should be on a new URL which includes '/commands/actions'
      cy.url().should('include', '/commands/actions')
  
      // Get an input, type into it and verify that the value has been updated
      cy.get('.action-email')
        .type('fake@email.com')
        .should('have.value', 'fake@email.com')
    })
 
})