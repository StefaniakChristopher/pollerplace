/// <reference types="cypress" />

import { frontendHost } from "../../src/lib/index"

const sampleEmail = 'muhammad@mail.com'
const sampleUsername = 'muhammad'
const samplePassword = 'muhammad123'

describe('Login Page', () => {
  it('is available at a url', () => {
    cy.visit(frontendHost + '/authenticate/signup')
  })

  it('has email, username, password, repeat password fields and also has a submit button that takes you to the home page when clicked', () => {
    cy.visit(frontendHost + '/authenticate/signup')

    cy.get('[data-cy="emailInput"]').type(sampleEmail)
    cy.get('[data-cy="usernameInput"]').type(sampleUsername)
    cy.get('[data-cy="passwordInput"]').type(samplePassword)
    cy.get('[data-cy="repeatPasswordInput"]').type(samplePassword)

    cy.get('[data-cy="submitButton"]').click()

    cy.url().should('eq', frontendHost + '/home')
  })

})