/// <reference types="cypress" />

describe('Sign Up Page Validation', () => {
    // Find the Page
        it('should find the page at route /signup', () => {
            cy.visit('localhost:3000/signup')
        })

    // Find Form Fields and Input Text
        it('should find Name form field and enter a name', () => {
            cy.get('.flex-col.w-full > :nth-child(1) > .w-full').type('Testy McTester')
        })

        it('should find Email form field and enter an Email', () => {
            cy.get('.flex-col.w-full > :nth-child(2) > .w-full').type('foo@bar.net')
        })

        it('should find Password form field and enter a Password', () => {
            cy.get('.flex-col.w-full > :nth-child(3) > .w-full').type('hitenter')
        })

        it('should find Verify Password form field and enter a Password', () => {
            cy.get('.flex-col.w-full > :nth-child(4) > .w-full').type('hitenter')
        })

    // Test UI for Controlling User Flow on Initial Onboarding page
        it('should find the cancel button and click it, then return', () => {
            cy.get('.justify-around > :nth-child(1)').should('have.text', 'Cancel').click()

            // This actually tests the Sign Up button on Main page to return Initial Onboarding page
            cy.get('.border-solid').should('have.text', 'Sign Up').click()

            // This tests the Let's Go button to proceed to 2nd Onboarding page: Dietary Preferences
            cy.get('.justify-around > :nth-child(2)').should('have.text', `Let's Go!`).click()
        })

    // Test Checkboxes for Dietary Presets on 2nd Onboarding Page
        it('should toggle the 1st option', () => {
            cy.get(':nth-child(1) > .my-3 > .px-2').click()
        })
        it('should toggle the 2nd option', () => {
            cy.get(':nth-child(2) > .my-3 > .px-2').click()
        })
        it('should toggle the 3rd option', () => {
            cy.get(':nth-child(3) > .my-3 > .px-2').click()
        })
        it('should toggle the 4th option', () => {
            cy.get(':nth-child(4) > .my-3 > .px-2').click()
        })
        it('should toggle the 5th option', () => {
            cy.get(':nth-child(5) > .my-3 > .px-2').click()
        })
        it('should toggle the 6th option', () => {
            cy.get(':nth-child(6) > .my-3 > .px-2').click()
        })
        it('should toggle the 7th option', () => {
            cy.get(':nth-child(7) > .my-3 > .px-2').click()
        })
        it('should toggle the 8th option', () => {
            cy.get(':nth-child(8) > .my-3 > .px-2').click()
        })

    // Test UI for Controlling User Flow on Diet Preference Onboarding Page
    it('should find the Go Back button and click it, then return', () => {
        cy.get('.justify-around > :nth-child(1)').should('have.text', 'Go Back').click()

        // This actually tests the Let's Go button on the Initial Onboarding page to return to Dietary Preference Onboarding
        cy.get('.justify-around > :nth-child(2)').should('have.text', `Let's Go!`).click()

        // This checks the Continue button on the Dietary Preference Onboarding page & completes the currently implemented user flow for Onboarding
        cy.get('.justify-around > :nth-child(2)').should('have.text', 'Continue').click()
    })
})