describe('Text Area', () => {
  beforeEach(() => {
    cy.goHome()
  })

  it('Deve preencher o campo de texto', () => {
    cy.login('papito@cyskills.com.br', 'showtime')
    cy.userLoggedIn()
    cy.goToPage('/textarea', 'h2', 'Textarea')

    cy.get('textarea[name="message"]')
      .type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
      .should('have.value', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')  
      
  })
})