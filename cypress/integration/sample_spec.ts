/// <reference types="cypress" />

import {signUp} from "../support/commands";

describe('Test Sign Up GreenCity', () => {

    beforeEach(() => {cy.visit('/');} )

    it('verify that we can type some in login', () => {
        cy.url().should('include', 'https://ita-social-projects.github.io/GreenCityClient');
       // cy.signUp();
        cy.signIn();


 /*       cy.get('.header_sign-up-btn > span').click()
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
        cy.get('.form-content-container > .primary-global-button').should('not.be.disabled')  */
    })
})