describe('Checkbox', () => {
  beforeEach(() => {
    cy.goHome()
    cy.login('papito@cyskills.com.br', 'showtime')
    cy.userLoggedIn()
    cy.goToPage('/checkbox', 'h2', 'Checkbox')
  })

  it('Deve selecionar linguagens que utilizam o JavaScript', () => {
    cy.get('label[for="javascript"]').click()
    cy.get('label[for="typescript"]').click()
  })

  it('Deve marcar todos os checkboxes', () => {
    const labels = ['javascript', 'typescript', 'python', 'rust', 'go']
  
    labels.forEach(label => {
      cy.get(`label[for="${label}"]`).click()
      cy.get(`label[for="${label}"] span`).should('have.class', '!opacity-100')
    })
  })
})