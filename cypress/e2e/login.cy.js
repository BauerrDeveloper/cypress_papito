describe('Login', () => {
  
  beforeEach(() => {
    cy.goHome()
  })

  it('Deve realizar login com suecsso', () => {
    cy.login('papito@cyskills.com.br', 'showtime')
    cy.userLoggedIn()
  })

  it('Não deve realizar login com senha inválida', () => {
    cy.login('papito@cyskills.com.br', 'senhaerrada')
    cy.noticeHaveText('E-mail ou senha incorretos. Por favor, tente novamente!')
  });

  it('Não deve realizar login com e-mail não cadastrado', () => {
    cy.login('404@cyskills.com.br', 'senhaerrada')
    cy.noticeHaveText('E-mail ou senha incorretos. Por favor, tente novamente!')
  })

  it('Não deve realizar login com email incorreto', () => {
    cy.login('222.cyskills.com.br', 'senhaerrada')
    cy.noticeHaveText('O formato do e-mail está incorreto. Por favor, verifique e tente novamente!')
  })
  
})