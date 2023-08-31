describe('Login behavior', () => {
  it('Redirects to /goals on login', () => {
    cy.visit(`${Cypress.env("host")}/login`)

    cy.get("#emailField").type(Cypress.env("loginEmail"));
    cy.get("#passwordField").type(Cypress.env("loginPassword"));

    cy.get("#submitButton").click();

    cy.url().should("include", "/goals");
  })
})