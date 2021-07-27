describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })
  it('should update the display of running total', () => {
    cy.get('#number5').click();
    cy.get('#number2').click();
    cy.get('.display').should('contain', '52')
  })
  it('should update display after math', () => {
    cy.get('#number5').click();
    cy.get('#operator_add').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '10')
  })
})