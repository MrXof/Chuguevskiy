class registration {
    createAccountForm = {
        firstName:()=> cy.get('#fname'),
        lastName: ()=> cy.get ('#lname'),
        
    }
} module.export = new registration();