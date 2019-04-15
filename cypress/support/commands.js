Cypress.Commands.add("dealRoadCard", () => {
  cy.contains('button', 'New Road Card')
    .click()
})

Cypress.Commands.add("dealFarmCard", () => {
  cy.contains('button', 'New Farm Card')
    .click()
})

Cypress.Commands.add("dealFourYellowCards", () => {
  cy.get('.yellow-road-cards').then(($cards) => {
    if ($cards.children().length < 4) {
      cy.dealRoadCard()
      cy.dealFourYellowCards()
    }
    return
  })
})

Cypress.Commands.add("dealFullGame", () => {
  cy.dealFourYellowCards()
  cy.dealFarmCard()
})
