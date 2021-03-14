describe("Alternative Flow 4B: Association search for a specific business with filter", () => {
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
    cy.get('input[name="email"]').type("amir@asso.com");
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

  it('clicks on "FILTERS" and select "Bakery" options', () => {
    cy.get("button").contains("FILTERS").click();
    cy.get('input[value="bakery"]').click();
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