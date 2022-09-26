// Напишите тест на авторизацию https://yevheniiahlovatska.editorx.io/web-practice/
/*Comments
Вот тебе примеры: постарайся пройтись и просмотреть как работает, все получится:

describe ('Check LogIn form on main page', () => {
    before ('Open page', () => {
        cy.visit('https://yevheniiahlovatska.editorx.io/web-practice/');
        cy.viewport(1300,768);
        cy.wait(8000);
    });
    it ('Test', () => {
        cy.contains('Log In').click();
        cy.url().should('eq', 'https://yevheniiahlovatska.editorx.io/web-practice/');
        cy.get('button[data-testid="signUp.switchToSignUp"]', {timeout:7000}).click();
        cy.get('button[data-testid="buttonElement"]', {timeout:10000}).click();
        cy.contains('h1', 'Log In').invoke('text').should('eq', 'Log In');
        cy.get('input[type="email"]').type('alphaitschool@gmail.com', {delay:50}).should('have.value', 'alphaitschool@gmail.com');
        cy.get('input[type="password"]').type('Qwerty123!', {delay:50}).should('have.value', 'Qwerty123!');
        cy.get('[data-testid="buttonElement"]').click();
        cy.get('div[data-testid="siteMembers.container"] span').invoke('text').should('eq', 'Wrong email or password');
    });
});


1)  поменяй ссылку и тест начнет работать и проходить - https://yevheniiahlovatska.editorx.io/web-practice/post/manage-your-blog-from-your-live-site
вот примеры как еще сделали
describe ('Добавление комментария' , () => {
   it('Авторизация сразу+удаление', () => {
    cy.visit('https://yevheniiahlovatska.editorx.io/web-practice/post/what-to-wear-to-a-blacktie-event').viewport('ipad-mini');
    cy.wait(9000);
    cy.get('[data-testid="section-container"] button').eq(0).click();
    Cypress.on('uncaught:exception', (err) => { //ошибка Error: ResizeObserver loop limit exceeded
    return false;
     });
    cy.get('[data-testid="signUp.switchToSignUp"]').click();
    cy.get('[id*="Email"] button').click();
    cy.get('[type="email"]').type('fortestonly@mail.com', {delay : 20});
    cy.get('[type="password"]').type('Qwerty123*', {delay : 20});
    cy.get('[data-testid="submit"] button').click();
    cy.wait(5000);
    cy.get('[data-hook="recent-posts"]').scrollIntoView();
    cy.get('[data-hook="comment-box-placeholder"]').eq(0).click();
    cy.get('[aria-describedby="placeholder-editor"]').type('comment1');
    cy.get('[data-hook="submit-button"]').click();
    cy.get('#viewer-foo', {timeout : 5000}).eq(0).should('have.text', 'comment1');
    cy.wait(5000);
    cy.get('[data-hook="actions-menu-btn"] svg').eq(0).scrollIntoView().click();
    cy.get('[data-content="Delete"]').click();
    cy.contains('[data-hook="submit-button"]', 'Delete').click();
  });
});


*/

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
