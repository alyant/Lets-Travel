// first_test.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('My first test', () => {
  it('does not do much', () => {
    expect(true).to.equal(true)
  })
})

describe('Page loading', () => {
  it('should load properly', () => {
    cy.visit('http://localhost:3000')
  })
  it('should contain proper titles', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Need to get away')

  })
  it('should take you to random generator page on click', () => {
    cy.visit('http://localhost:3000')
    cy.contains("Let's go").click()

    cy.url()
      .should('include', 'randomPlace')
  })
})
