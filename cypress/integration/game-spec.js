describe('lil-avenue', () => {
  beforeEach(() => {
    cy.visit('.')
  })

  describe('farm-cards', () => {
    it('loads initial farm card then disables farm cards', () => {
      cy.get('.card.farm')
        .first()
        .should('be.visible')
        .next()
        .should('not.be.visible')

      cy.contains('button', 'New Farm Card')
        .should('be.disabled')
    })

    it('enables farm cards when there are four yellow cards', () => {
      cy.dealFourYellowCards()
    })

    it('peeks', () => {
      cy.get('.card.farm.peek')
        .should('not.be.visible')

      cy.contains('button', 'Peek')
        .click()

      cy.get('.card.farm.peek')
        .should('be.visible')
        
      cy.contains('button', 'Peek')
        .click()

      cy.get('.card.farm.peek')
        .should('not.be.visible')
    })

    it('doesnt peek with max cards', () => {
      cy.contains('button', 'New Farm Card')
        .click()
        .click()
        .click()
        .click()

      cy.contains('button', 'Peek')
        .click()

      cy.get('.card.farm.peek')
        .should('not.be.visible')
    })

    it('new farm card clears road cards', () => {
      cy.contains('button', 'New Road Card')
        .click()

      cy.get('.card.road').should('have.length', 1)

      cy.contains('button', 'New Farm Card')
        .click()

      cy.get('.card.road').should('have.length', 0)
    })
  })

  describe('road-cards', () => {
    it('loads road cards', () => {
      cy.dealRoadCard()

      cy.get('.card.road').should('have.length', 1)
    })

    it.only('disables button after four yellow cards are dealt', () => {
      cy.dealFourYellowCards()

      cy.get('.card.road').should('have.length', 4)
    })
  })
})
