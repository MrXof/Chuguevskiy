// Напишите тест на авторизацию https://yevheniiahlovatska.editorx.io/web-practice/


describe('SingIn', () => {
  it('Sing', () => {
    cy.visit('https://yevheniiahlovatska.editorx.io/web-practice/')
    cy.wait(5500);
    cy.get('#comp-kbgakxea_r_comp-kdg9ubyj._3Wf7h>button').click();
    cy.get('[id="SM_ROOT_COMP9"]>div>div').click();
    //cy.contains('Log In').click();
   // cy.get('[id="input_input_emailInput_SM_ROOT_COMP9"]').type('chendanyabro6@gmail.com');
    //cy.get('#input_input_passwordInput_SM_ROOT_COMP9').type('Sqrtywz123');

    //CAPTCHA

   // cy.get('#okButton_SM_ROOT_COMP9>button').click();

  });
});