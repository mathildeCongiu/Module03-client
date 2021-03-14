<<<<<<< HEAD
describe("Alternative flow 4A: Association search for a specific business", () => {
  it(`Visits the Volunt'Hero Home Page`, () => {
    cy.visit("http://volunthero.herokuapp.com");
=======
describe("Alternative flow 1A-2A: Association already has an account", () => {
  it(`Visits the Volunt'Hero Home Page`, () => {
    cy.visit("http://localhost:4000");
>>>>>>> 4da475cc6bf2f0013980156a7568e7d67a8dcd64
  });

  it('finds and click the link "Log In"', () => {
    cy.get("a").get(".header-link").contains("Log In").click();
  });

  it('finds and click the link "Log In as an Association"', () => {
    cy.get("button").contains("Log In as an Association").click();
  });

  it("fill and send log in form", () => {
<<<<<<< HEAD
    cy.get('input[name="email"]').type("rakuten@asso.com");
    cy.get('input[name="password"]').type("1234");
    cy.get("form").submit();
    cy.url().should("include", "/dashboard");
  });

  it('finds and click the link "Search"', () => {
    cy.server();
    cy.intercept("GET", "/association/search").as("business");
    cy.get("p").contains("Search").click();
    cy.url().should("include", "/search");
    cy.wait("@business");
  });

  it("loads all business", () => {
    cy.get('h3').as('businessArr')
    cy.expect('@businessArr').to.have.length.greaterThan(0)
  });

  it('writes "Bakery Augustina Bonita" in the search bar', () => {
    cy.get('input[name="search"]').type("Bakery Augustina Bonita");
  });

  it('finds and click "Bakery Augustina Bonita"', () => {
    cy.get("h3").contains("Bakery Augustina Bonita").parent().click();
    cy.url().should("include", "/business-details");
  });

  it('finds and click "Request partnership" button', () => {
    cy.server();
    cy.intercept('POST', '/association/business/5fbf855a729aed0017857024', {
      statusCode: 200,
      body: 'it worked'
    })
    cy.get("button").contains("Request partnership").click();
  });
});
=======
    cy.get('input[name="email"]').type("amir@asso.com");
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
>>>>>>> 4da475cc6bf2f0013980156a7568e7d67a8dcd64
