describe('Playground', () => {
  it('passes', () => {
    cy.visit('https://playground.cyskills.com.br')
    cy.get('input[data-cy=\'email\']').type('papito@cyskills.com.br')
    cy.get('input[data-cy=\'password\']').type('showtime')
    cy.get('button[data-cy=\'login-button\']').click()
    cy.get('h2[data-cy=\'welcome-title\']')
      .scrollIntoView()
      .should('be.visible')
      .and('have.text', 'Boas vindas ao Cypress Playground')
  })
})
