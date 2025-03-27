describe('GenreSelect test', () => {
  it('selects Horror genre', () => {
    cy.visit('http://localhost:3000/');
    cy.contains('span', 'Horror').should('not.have.class', 'selected');
    cy.contains('span', 'Horror').click();
    cy.contains('span', 'Horror').should('have.class', 'selected');
  })
})
