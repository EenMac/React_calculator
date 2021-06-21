describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })
  it ('should update running total', () => {
    cy.get('#number5').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '5')
  })
  it('should update the display with result of operations', () => {
    cy.get('#number4').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click()
    cy.get('.display').should('contain', '6')
  })
  it('should display positive numbers correctly', () => {
    cy.get('#number3').click()
    cy.get('#operator_equals').click()
    cy.get('.display').should('contain', '3')
  })
  it('should display negative numbers correctly', () => {
    cy.get('#number3').click()
    cy.get('#operator_subtract').click()
    cy.get('#number5').click()
    cy.get('#operator_equals').click()
    cy.get('.display').should('contain', '-2')
  })
  it('should display decimals correctly', () => {
    cy.get('#number1').click();
    cy.get('#operator_divide').click()
    cy.get('#number5').click()
    cy.get('#operator_equals').click()
    cy.get('.display').should('contain', '0.2')
  })
  it('should display large numbers correctly', () => {
    cy.get('#number3').click()
    cy.get('#number3').click()
    cy.get('#number3').click()
    cy.get('#number3').click()
    cy.get('#number3').click()
    cy.get('#number3').click()
    cy.get('#number3').click()
    cy.get('#number3').click()
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '33333333')
  })
  it('should be able to correctly output an incorrect operation', () => {
    cy.get('#number6').click()
    cy.get('#number5').click()
    cy.get('#number2').click()
    cy.get('#number6').click()
    cy.get('#number7').click()
    cy.get('#number6').click()
    cy.get('#operator_equals').click()
    cy.get('#operator_divide').click()
    cy.get('#number0').click()
    cy.get('#operator_equals').click()
    cy.get('.display').should('contain','undefined')
  }


})