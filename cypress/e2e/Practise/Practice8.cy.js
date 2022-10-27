describe('test',()=>{
    before(()=>{
        cy.viewport(1600,900);
        cy.visit('http://autopract.com');
        cy.wait(2000);
    });

    it('commandTest',()=>{
        cy.clickOnElement('.close');
    });

    it.only('commandTest',()=>{
        cy.clickOnElement('.close');
      //  cy.clickOnElement('.bar-style');
     //   cy.textInput('#mc-embedded-subscribe-form .form-group.mx-sm-3>input');
     const text = ('ABOUT');

        cy.findByText(`${text}`);
    });

});