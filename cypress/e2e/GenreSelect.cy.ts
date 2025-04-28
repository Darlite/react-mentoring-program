describe('GenreSort test', () => {
  it('selects Horror genre', () => {
    cy.visit('http://localhost:3000/');
    cy.contains('span', 'Horror')
        .invoke('attr', 'class')
        .should('not.match', /selected/);
    cy.contains('span', 'Horror').click();
    cy.contains('span', 'Horror')
        .invoke('attr', 'class')
        .should('match', /selected/);
  })
})
