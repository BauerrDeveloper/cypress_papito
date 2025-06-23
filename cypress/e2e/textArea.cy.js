describe('Text Area', () => {
  beforeEach(() => {
    cy.goHome()
    cy.validatePage('h2', 'Boas vindas ao Cypress Playground')
  })

  it('Deve preencher o campo de texto', () => {
    cy.login('papito@cyskills.com.br', 'showtime')
    cy.userLoggedIn()
    cy.goToPage('text-area', 'h2', 'Text Area')

    cy.get('textarea[name="message"]')
      .type(lorem.paragraphs(1))
      .should('have.value', lorem.paragraphs(1))  
      
  })
})