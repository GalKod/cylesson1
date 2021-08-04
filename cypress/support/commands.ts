// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { LoremIpsum } from "lorem-ipsum";


declare global {
    namespace Cypress {
        type SignIn = {
            email?: string,
            pseudonym?: string,
            password?: string
        }
        interface Chainable {
            signIn: typeof signIn
            signUp: typeof signUp
            setEmail: typeof setEmail
            setName: typeof setName
            setPassword: typeof setPassword
            setConfirmPassword: typeof setConfirmPassword
            openSignUpForm: typeof openSignUpForm
            activeButtonSignUp: typeof activeButtonSignUp
            activeButtonSignIn: typeof activeButtonSignIn
            openSignInForm: typeof openSignInForm
        }
    }
}

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4
    },
    wordsPerSentence: {
        max: 16,
        min: 4
    }
});

export function getRandomNumber(): number {
    const rndInt = Math.floor(Math.random()*60000)+1;
    console.log(rndInt);
    return rndInt;
}

export const email = 'greencitygalina'+getRandomNumber()+'@gmail.com';
export const pseudonym = lorem.generateWords(1);
export const password = 'Temp#001';

export function setEmail(mail?: string){
    cy.get('#email').type(mail);
}

function setName(name?: string, baseConfig: boolean = true) {
    cy.get('#firstName').type(name);
}

function setPassword(pass?: string, baseConfig: boolean = true) {
    cy.get('#password').type(pass);
}

function setConfirmPassword(confirmPass?: string, baseConfig: boolean = true) {
    cy.get('#repeatPassword').type(confirmPass);
}

function openSignUpForm() {
    cy.get('[class="header_sign-up-btn secondary-global-button"]').click();
    cy.get("app-auth-modal app-sign-up [type='submit']").should('be.visible');
}

function openSignInForm() {
    cy.get('[class="header_sign-in-link tertiary-global-button"]').click();
    cy.get("app-sign-in [type='submit']").should('be.visible');
}

function activeButtonSignUp() {
    cy.get("app-auth-modal app-sign-up [type='submit']").should('not.be.disabled')
}

function activeButtonSignIn() {
    cy.get("app-sign-in [type='submit']").should('not.be.disabled')
}

export function signUp(mail?: string, name?: string, pass?: string, confirmPass?: string, baseConfig: boolean = true) {
    openSignUpForm();
    if (baseConfig) {
        setEmail(email);
        setName(pseudonym);
        setPassword(password);
        setConfirmPassword(password);
        activeButtonSignUp();
    } else {
        setEmail(mail);
        setName(name);
        setPassword(pass);
        setConfirmPassword(confirmPass);
        activeButtonSignUp();
    }
}

export function signIn(mail?: string, pass?: string, baseConfig: boolean = true) {
    openSignInForm();
    if(baseConfig){
        setEmail(email);
        setPassword(password);
        activeButtonSignIn();
    }else{
        setEmail(mail);
        setPassword(pass);
        activeButtonSignIn();
    }
}


Cypress.Commands.add('SignUp', signUp)