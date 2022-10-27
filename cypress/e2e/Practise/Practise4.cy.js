


//<reference types="Cypress"/>
//import { faker } from '@faker-js/faker';
import '@4tw/cypress-drag-drop';
    

describe('empty spec', () => {
/*
  const randomEmail = faker.internet.email();
    const randomName = 'AutomationTest' + faker.name.fullName();
    const randomLastName = faker.name.lastName();
    const id = faker.datatype.uuid();
    const img = faker.image.avatar();
    // data
    // bithday
    // password
    const arr = faker.helpers.arrayElement(['free','toy','length'])

  before(()=>{
    cy.visit('https://testautomationpractice.blogspot.com/');
    cy.viewport(1600,900);
    cy.wait(2000);
    
  it('UI-test', () => {
  cy.get('[onclick="myFunction()"]').click();
        cy.on('window:confirm',(str)=>{
            expect(str).to.equal('Press aqweqwe')
        })

    })
  })
  it('UI-test', () => {
  cy.visit('https://testautomationpractice.blogspot.com/');
  cy.viewport(1600,900);
  cy.wait(2000);
  cy.scrollTo('center');
cy.get('.ui-widget-content.ui-corner-tr.ui-draggable.ui-draggable-handle').drag('#trash');
cy.get('.gallery.ui-helper-reset.ui-helper-clearfix.ui-droppable>li:last-child').drag('#trash');
cy.get('#draggable').drag('.ui-widget-header.ui-droppable');
cy.get('#slider span').invoke('attr','style','left:80%');
  });


  it('UI-Test', () => {
    cy.visit('https://mui.com/material-ui/react-slider/');
    cy.viewport(1600,900);
    cy.wait(2000);
    cy.get('.MuiSlider-root span:nth-child(2)')
    .invoke('attr','style','left: 0%; width: 99%;')
    .should('attr','style','left: 0%; width: 99%;')
    cy.get('.MuiSlider-root span:nth-child(3)')
    .invoke('attr','style','left: 99%;')
    cy.get('.MuiSlider-root input')
    .invoke('attr','aria-valuenow', '99')
    .invoke('attr', 'value', '99')
});
*/
it('UI-Test', () => {
  cy.visit('https://mui.com/material-ui/react-slider/');
  cy.viewport(1600,900);
  cy.wait(2000);
cy.get('.MuiSlider-track.css-5wk36y')
.invoke('attr',"style",'left:0;width:99%')
cy.get('[class*="css-1623zc"] span:nth-child(3)')
s.invoke('attr','style','left:99%')
cy.get('[class*="css-1623zc"] span:nth-child(3)>input')
.invoke('attr','style',"aria-valuenow",'99')
.invoke('attr','style','value','99')

});
});
