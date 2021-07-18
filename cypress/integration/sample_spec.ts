/// <reference types="cypress" />

describe('Test Sign Up GreenCity', () => {
    it('Visits ita social projects GreenCity', () => {
        cy.visit('https://ita-social-projects.github.io/GreenCityClient/#/')
        cy.get('.header_sign-up-btn > span').click()
        cy.get('.form-content-container > .primary-global-button').should('be.visible')
        cy.get('#email')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com')
        cy.get('#firstName')
            .type('fake.name')
            .should('have.value', 'fake.name')
        cy.get('#password')
            .type('Fake_password_1')
            .should('have.value', 'Fake_password_1')
        cy.get('#repeatPassword')
            .type('Fake_password_1')
            .should('have.value', 'Fake_password_1')
        cy.get('.form-content-container > .primary-global-button').should('not.be.disabled')
    })
})