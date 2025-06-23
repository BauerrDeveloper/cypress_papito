describe('Input Fields', () => {
  beforeEach(() => {
    cy.goHome()
  })

  it('Deve preencher o campo do tipo texto', () => {
    cy.login('papito@cyskills.com.br', 'showtime')
    cy.userLoggedIn()
    cy.get('nav a[href="input-fields"]').click()
    cy.validatePage('h2', 'Input Fields')
    
    cy.get('input[data-cy="fullname"]')
      .type('James Bond')
      .should('have.value', 'James Bond')

    cy.get('input[name="email"]')
      .type('james@bond.com')
      .should('have.value', 'james@bond.com')

    cy.get('input[placeholder="12345"]')
      .type('2025')
      .should('have.value', '2025')

    cy.get('input[data-cy="date"]')
      .type('2025-06-22')
      .should('have.value', '2025-06-22')        

      
  })
})