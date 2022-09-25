/*describe('test', () => {
  it('test', () => {
    cy.visit('https://www.beaxy.com/buy-sell/')
    cy.get('h1').invoke('text').then((HeaderPage)=>{
      cy.log(HeaderPage);
      expect('Buy and Sell Cryptocurrency with Ease').to.be.a('string');
    });


    it.only('test',()=>{
      it.only('test',()=>{
        cy.visit('https://www.beaxy.com/');
        cy.get('.header-btn__login.header-btn__login-desktop.modal-link').check();
        });
    
  });
*///});

describe('test', () => {
  it('test',()=>{
    cy.viewport(1600,900)
      cy.visit('https://www.beaxy.com')
      cy.wait(2000);
      cy.get('.popUp-form-wrapper.show-wrapper>div:last-child>a').click();

      cy.get('.header-btn__login.header-btn__login-desktop.modal-link').check();
    });
});



