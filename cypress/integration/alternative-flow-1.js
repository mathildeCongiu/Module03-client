describe("Alternative flow 1A-2A: Association already has an account", () => {
  it(`Visits the Volunt'Hero Home Page`, () => {
    cy.visit("http://volunthero.herokuapp.com");
  });

  it('finds and click the link "Log In"', () => {
    cy.get("a").get(".header-link").contains("Log In").click();
  });

  it('finds and click the link "Log In as an Association"', () => {
    cy.get("button").contains("Log In as an Association").click();
  });

  it("fill and send log in form", () => {
    cy.get('input[name="email"]').type("assododo@dodo.com");
    cy.get('input[name="password"]').type("1234");
    cy.get("form").submit();
    cy.url().should("include", "/dashboard");
  });

  it('finds and click the link "Search"', () => {
    cy.get("p").contains("Search").click();
    cy.url().should("include", "/search");
  });

  it('loads all business', () => {
    cy.intercept('GET', 'https://volunthero.herokuapp.com/association/search').as('business')
    // cy.wait('@business')
    // cy.wait(5000)
    // cy.get("a").contains("Bakery Augustina Bonita").click();
  });

  it('finds and click "Bakery Agustina Bonita"', () => {
    // cy.intercept('GET', 'https://volunthero.herokuapp.com/association/search').as('business')
    // cy.wait('@business')
    // cy.wait(5000)
    cy.get("a").contains("Bakery Augustina Bonita").click();
  });

  // it('finds and click "Request partnership" button', () => {
  //   cy.get("button").contains("Request partnership").click();
  // });
});

/*
FIX CORS PROBLEM
*/
