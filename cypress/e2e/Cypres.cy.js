/*

describe('Test', () => {

  it('passes', () => {
    cy.visit('https://facebook.com/');
    cy.get('#email').type('13alfa.tech@gmail.com');
    cy.get('#passContainer').type('sqrtywz123');

    cy.get('#email').invoke('val').should('eq',"13alfa.tech@gmail.com");
    cy.get('[name="login"]').click();
  })
})



describe('Авторизация',()=>{

before(()=>{
  cy.log('before');
});

after(()=>{
cy.log('after');
});

beforeEach(()=>{
  cy.visit('https://m.facebook.com/');
});

afterEach(()=>{
  cy.log('afterEach');
});
it('поле имейл',()=>{

});

});




describe('Авторизация',()=>{
  beforeEach(()=>{
    cy.visit('https://www.facebook.com');
  });

it('Select form',()=>{
  cy.get('#day').select('25');
  cy.get('@month').select('дек');
  cy.get('#year').select('1991');

  cy.get('#day').invoke('val').should('eq','25');
  cy.get('#day').invoke('val').should('eq','12');
  cy.get('#year').invoke('val').should('eq','1991');
});

});
*/




describe('SingUp',()=>{

beforeEach(()=>{
  cy.visit('https://www.beaxy.com/register');
});


  it('SingUp',()=>{
   // cy.visit('https://www.beaxy.com/register');
    cy.get('#popUp-register-email').type('verulanedanill@gmail.com');
    cy.get('#_pass').type('Sqrtywz123$$');
    cy.get('[name="phoneNumber"]').type('0970951282');
      

    cy.get('div[class=selected-country-arrow]').click();
    cy.get('[country-code="DE"]',{timeout:1000}).click();
    cy.get('#popUp-register-promo').type('Promo');
    cy.get('#custom-register-checkbox-third').click(); 
   
    cy.get('div[class="popUp-form-wrapper"] button').click();
  });
});

// .clear(); - удалить
// Good Team )