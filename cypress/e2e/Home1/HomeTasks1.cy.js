
//Home task 9 
//Напишите тест на окно Авторизации https://www.beaxy.com/

describe ('SingIn',()=>{
  beforeEach(()=>{
    cy.visit('https://www.beaxy.com/');
  });
it('SingIn',()=>{
  cy.get('.bugrer__img[for="burger__controller"]>svg>path').click();
  cy.get('.header-btn__login-table.modal-link').click();
  cy.get('#popUp-login-email').type('verulanedanill@gmail.com');
  cy.get('#popUp-login-password').type('SQRtywz123$$');
  cy.get('#login-checkbox').click();
  cy.get('.popUp-form-input-wrap.popUp-form-login-btn>button').click();
});
});



