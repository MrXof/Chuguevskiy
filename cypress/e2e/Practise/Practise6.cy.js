/*describe('Test',()=>{
    it('testBlock1',()=>{
        cy.viewport(1600,900);
        cy.visit('https://www.beaxy.com/')
        cy.wait(8000);
        cy.get('.home-table').invoke('remove');
        cy.get('.custom-widget').invoke('remove');
        cy.matchImageSnapshot();

    })

})*/

describe('Practise',()=>{
    it('Test',()=>{
        cy.viewport(1600,900);
        cy.visit('https://www.monobank.ua/');
        cy.wait(4000);
        cy.matchImageSnapshot();
    });
    it('Test2',()=>{
        cy.viewport(1600,900);
        cy.visit('https://www.monobank.ua/');
        cy.wait(4000);
        cy.get('.tab-panel .tab-link:nth-child(2)',{timeout:4000}).click();
        cy.matchImageSnapshot();
    });
    it('Test3',()=>{
        cy.viewport(1600,900);
        cy.visit('https://www.monobank.ua/');
        cy.wait(4000);
        cy.get('.tab-panel .tab-link:nth-child(3)',{timeout:4000}).click();
        cy.matchImageSnapshot();
    });
});