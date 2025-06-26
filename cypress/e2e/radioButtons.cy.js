describe('Radio Buttons', () => {
    beforeEach(() => {
        cy.goHome()
        cy.login('papito@cyskills.com.br', 'showtime')
        cy.userLoggedIn()
        cy.goToPage('/radio', 'h2', 'Radio Buttons')
    })

    it('Deve selecionar a opção Cypress', () => {
        cy.get('input[type="radio"][id="cypress"]')
            .parent()
            .click()
            .find('span')
            .should('have.class', '!bg-primary')
    });

    it('Deve selecionar todas as opções', () => {

        const labels = ["cypress", "playwright", "selenium", "robot", "jest"];

        labels.forEach(label => {
            cy.get(`input[type="radio"][id="${label}"]`)
                .parent()
                .click()
                .find('span')
                .should('have.class', '!bg-primary')
        })

    })

    it('Deve marcar o framework utilizado no curso', () => {
        cy.contains('label', 'Cypress').click()
    })

}) 