describe("Alternative flow 1A-2A: Association already has an account", () => {
  it(`Visits the Volunt'Hero Home Page`, () => {
    cy.visit("http://localhost:4000");
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
  });

  it('finds and click the link "Search"', () => {
    cy.get("p").contains("Search").click();
  });

  it('finds and click "Bakery Agustina Bonita"', () => {
    cy.get("h3").contains("Bakery Agustina Bonita").click();
  });

  it('finds and click "Request partnership" button', () => {
    cy.get("button").contains("Request partnership").click();
  });
});

/*
FIX CORS PROBLEM
*/
