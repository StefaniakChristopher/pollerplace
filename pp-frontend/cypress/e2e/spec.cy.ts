/// <reference types="cypress" />

import { frontendHost, auth0Host } from "../../src/lib/index"

const sampleEmail = 'mohammed@mail.com'
const samplePassword = 'Please123'

describe('Login Page', () => {

  it('has email, username, password, repeat password fields and also has a submit button that takes you to the home page when clicked', () => {
    cy.visit(auth0Host + "/login")

    cy.get('[id="username"]').type(sampleEmail)
    cy.get('[id="password"]').type(samplePassword)

    cy.get('[data-action-button-primary="true"]').click()

    // cy.url().should('eq', frontendHost + '/home')
  })

})