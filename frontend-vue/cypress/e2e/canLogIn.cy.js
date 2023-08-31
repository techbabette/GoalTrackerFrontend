describe('Login behavior', () => {
  it('Redirects to /goals on login', () => {
    cy.visit(`${Cypress.env("host")}/login`)

    cy.get("#emailField").type(Cypress.env("loginEmail"));
    cy.get("#passwordField").type(Cypress.env("loginPassword"));

    cy.get("#submitButton").click();

    cy.url().should("include", "/goals");
  }),
  it("Can authenticate user that logged in earlier", () => {
    cy.visit(`${Cypress.env("host")}/`, {
      onBeforeLoad: function(window){
        window.localStorage.setItem("JWT", Cypress.env("validToken"));
      }
    });

    cy.get('[data-test="UsernameDisplay"]').should('be.visible');
  })
  it("Can log the user out and route to login", ()=>{
    cy.visit(`${Cypress.env("host")}/`, {
      onBeforeLoad: function(window){
        window.localStorage.setItem("JWT", Cypress.env("validToken"));
      }
    })

    cy.get('[data-test="UserMenuButton"]').click();
    cy.get('[data-test="LogoutButton"]').click();

    cy.url().should("include", "/login");
  })
})