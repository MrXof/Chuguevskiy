describe('home', () => {
  it('home', () => {
    cy.viewport(1600,900);
    cy.visit('https://demoqa.com');
    cy.wait(3000);
  })
})