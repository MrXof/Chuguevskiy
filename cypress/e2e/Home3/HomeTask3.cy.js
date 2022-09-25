
describe('Home', () => {
  it('AddCard', () => {
    cy.viewport(1600,900);
    cy.visit('https://yevheniiahlovatska.editorx.io/web-practice/product-page/croc-clutch');
    cy.wait(10000);
    cy.get('.buttonnext1749291004__root.Focusable4124283304__root.Button2745098129__root.Button2745098129--fullWidth.StatesButton3731447663__root.AddToCartButton3061789056__addToCartButton').click();
  });
  it.only('Login',() =>{
    cy.viewport(1600,900);
    cy.visit('https://multiplex.ua');
    cy.wait(2000);
    cy.get('.lk_link').click();
    cy.get('.login__wrap__social__links>a:first-child').click();
    cy.get('.login__wrap__social__links>a:nth-child(2)').click();
    cy.get('.login__wrap__social__links>a:last-child').click();
  });
});