/// <reference types="cypress" />

describe('Initial Page Validation', () => {
// Find the Page and Interactive Elements
beforeEach(() => {
    cy.visit('localhost:3000')
})

    it('should find Sign In text and click it', () => {
        cy.contains('Sign In').click()
    })
  
    it('should find Sign Up text and click it', () => {
        cy.contains('Sign Up').click()
    })
})


