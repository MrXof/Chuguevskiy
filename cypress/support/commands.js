
Cypress.Commands.add('clickOnElement',(elementLocator)=>{
    cy.get(`${elementLocator}`,{timeout:2000}).click();
});
Cypress.Commands.add('textInput',(text)=>{
    cy.get(`${text}`,).type('Test');
});

Cypress.Commands.add('findByText',(locator)=>{
    cy.get(`${locator}`)
    
})

import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';
addMatchImageSnapshotCommand();