/// <reference types="cypress" />


describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('http://localhost:5173/authenticate/signup')

    cy.contains('type')
  })
})