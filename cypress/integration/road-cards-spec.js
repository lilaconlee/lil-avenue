describe('road-cards', () => {
  beforeEach(() => {
    cy.visit('.')
  })

  it('loads road cards', () => {
    cy.contains('button', 'New Road Card')
      .click()

    cy.get('.card.road').should('have.length', 1)
  })
})
