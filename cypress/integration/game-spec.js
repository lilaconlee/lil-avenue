describe('lil-avenue game play', () => {
  beforeEach(() => {
    cy.visit('.')
  })

  it('loads initial farm card then disables farm cards', () => {
    cy.get('.farm-cards')
    .children()
    .should('have.length', 1)

    cy.contains('button', 'New Farm Card')
    .should('be.disabled')
  })

  it('deals road cards until there are four yellow cards', () => {
    cy.get('.card.road.yellow').should('have.length', 0)
    cy.contains('button', 'New Road Card').should('be.enabled')
    cy.contains('button', 'New Farm Card').should('be.disabled')

    cy.dealFourYellowCards()

    cy.get('.card.road.yellow').should('have.length', 4)
    cy.contains('button', 'New Road Card').should('be.disabled')
    cy.contains('button', 'New Farm Card').should('be.enabled')

    cy.dealFarmCard()

    cy.get('.farm-cards')
    .children()
    .should('have.length', 2)
  })

  it('new farm card clears road cards', () => {
    cy.dealFourYellowCards()
    cy.get('.card.road').should('not.have.length', 0)

    cy.dealFarmCard()
    cy.get('.card.road').should('have.length', 0)
  })

  context('peek', () => {
    it('button toggles peek card', () => {
      cy.get('.card.peek')
      .as('peek-card')
      .should('not.be.visible')

      cy.contains('button', 'Peek')
      .click()

      cy.get('@peek-card')
      .should('be.visible')

      cy.contains('button', 'Peek')
      .click()

      cy.get('@peek-card')
      .should('not.be.visible')
    })

    it('is disabled when five farm cards are dealt', () => {
      for (let i = 0; i < 4; i++) {
        cy.dealFullGame()
      }

      cy.contains('button', 'Peek')
      .should('be.disabled')
    })
  })
})
