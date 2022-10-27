describe('test',()=>{
    it('test',()=>{
        cy.viewport(1600,900);
        cy.visit('https://accounts.google.com/AccountChooser/signinchooser?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&flowName=GlifWebSignIn&flowEntry=AccountChooser');
        cy.wait(3000);
        cy.get('#identifierId').type('verulane@gmail.com');
      //  cy.get('#identifierNext>div').click();
    });
});