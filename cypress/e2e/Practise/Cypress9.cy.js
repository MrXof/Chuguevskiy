
describe('',()=>{
    it('',()=>{
        cy.viewport(1600,900);
        cy.visit('http://autopract.com');
        cy.wait(4000);
        cy.get('.modal-bg>button').click();
        cy.get('#mainnav > ul').invoke('show');
        cy.get('#mainnav > ul > li:nth-child(4) > ul')
    });
});