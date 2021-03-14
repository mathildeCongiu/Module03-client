<<<<<<< HEAD
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

  it('finds and click "Bakery Augustina Bonita"', () => {
    cy.get("h3").contains("Bakery Augustina Bonita").parent().click();
    cy.url().should("include", "/business-details");
  });

  it('finds and click "Request partnership" button', () => {
    cy.server();
    cy.intercept("POST", "/association/business/5fbf855a729aed0017857024", {
      statusCode: 200,
      body: "it worked",
    });
=======
describe("Basic flow: Make a request", () => {
  it(`Visits the Volunt'Hero Home Page`, () => {
    cy.visit("http://localhost:4000");
  });

  it('finds and click the link "Sign Up"', () => {
    cy.get("a").get(".header-link").contains("Sign Up").click();
  });

  it('finds and click the link "Sign up as an Association"', () => {
    cy.get("button").contains("Sign Up as an Association").click();
  });

  it("fill and send sign up form", () => {
    cy.get('input[name="name"]').type("Amir");
    cy.get('textarea[name="description"]').type("Amir Asso");
    cy.get('input[name="email"]').type("amir@asso.com");
    cy.get('input[name="password"]').type("1234");
    cy.get('input[name="street"]').type("Amir Street");
    cy.get('input[name="number"]').type(2);
    cy.get('input[name="flat"]').type("4o 2a");
    cy.get('input[name="postcode"]').type(50000);
    cy.get('input[name="city"]').type("Barcelona");
    cy.get('input[name="country"]').type("World");
    cy.get('input[name="phoneNumber"]').type(654654654);
    cy.get("form").submit();
  });

  it('finds and click the link "Search"', () => {
    cy.get("p").contains("Search").click();
  });

  it('finds and click Bakery Agustina Bonita', () => {
    cy.get("h3").contains("Bakery Agustina Bonita").click();
  });

  it('finds and click "Request partnership" button', () => {
>>>>>>> 4da475cc6bf2f0013980156a7568e7d67a8dcd64
    cy.get("button").contains("Request partnership").click();
  });
});
