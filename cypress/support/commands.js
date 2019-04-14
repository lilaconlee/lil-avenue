Cypress.Commands.add("dealRoadCard", () => {
  cy.contains('button', 'New Road Card')
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
