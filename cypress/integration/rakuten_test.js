describe("Make a request", () => {
  it(`Visits the Volunt'Hero Home Page`, () => {
    cy.visit("http://localhost:4000");
  });

  it('finds and click the link "Sign up"', () => {
    cy.get('a').get('.header-link').contains('Sign Up').click()
  })

  it('finds and click the link "Sign up as an Association"', () => {
    cy.get('button').contains('Sign Up as an Association').click()
  })

  it ('fill and send contact form', () => {
    cy.get('input[name="name"]').type('Amir')
    cy.get('textarea[name="description"]').type('Amir Asso')
    cy.get('input[name="email"]').type('amir@asso.com')
    cy.get('input[name="password"]').type('1234')
    cy.get('input[name="street"]').type('Amir Street')
    cy.get('input[name="number"]').type(2)
    cy.get('input[name="flat"]').type('4o 2a')
    cy.get('input[name="postcode"]').type(50000)
    cy.get('input[name="city"]').type('Barcelona')
    cy.get('input[name="country"]').type('World')
    cy.get('input[name="phoneNumber"]').type(654654654)
    cy.get('form').submit()
})
});

/*
FIX CORS PROBLEM
*/