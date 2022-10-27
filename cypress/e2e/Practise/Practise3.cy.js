describe('empty spec', () => {
  xit('passes', () => {
    cy.viewport(1600,900);
    cy.visit('http://the-internet.herokuapp.com/iframe');
    cy.wait(3000);
    cy.get('#mce_0_ifr').then(function($iFrame){
      const iframe = $iFrame.contents().find('body');
      cy.wrap(iframe)    // .wrap - перебери значение iFrame
      .clear()
      .type("HEllo")
    })
    xit('new',()=>{
      cy.viewport(1600,900);
      cy.visit('https://elfsight.com/ru/instagram-feed-instashow/create/');
      cy.wait(3000);
      cy.get('iframe').then(function($iFrame){
        const iframe = $iFrame.contents('body');
        cy.wrap(iframe).find('.ea-editor-templates-header').then((el)=>{
          expect(el.text()).to.be.equal('Select a template to start with');
        })
      })
    })

    xit ('Test 3 - First icon title check', () => {
      cy.visit('https://elfsight.com/ru/instagram-feed-instashow/create/');
      cy.viewport(1300,768);
      cy.wait(5000);
      cy.get('iframe').then(function($iframe){
          const iframe = $iframe.contents().find('body');
          cy.wrap(iframe).find('[title="Slider"] span').then((el) => {
            expect(el.text()).to.contains('Slider');

          });
      });
  });
  xit ('Test 4 - Button click', () => {
      cy.visit('https://elfsight.com/ru/instagram-feed-instashow/create/');
      cy.viewport(1300,768);
      cy.wait(5000);
      cy.get('iframe').then(function($iframe){
          const iframe = $iframe.contents().find('body');
          cy.wrap(iframe).find('[class*="actions-customize"]').click();
              });
  });




  });

  it('new',()=>{
    cy.viewport(1600,1080);
    cy.visit('https://yevheniiahlovatska.editorx.io/web-practice/product-page/croc-clutch');
    cy.wait(5000);
    cy.get('[data-hook="add-to-cart"]').wait(2000).click();
    
    cy.get('iframe').then(function($iframe){
      const iframe = $iframe.contents().find('body');
      cy.wait(3000);
      cy.wrap(iframe).find('[class="item-name"]').then((tt)=>{
        expect(tt.text()).to.contains(' Croc Clutch ');
      })
    })
  });
});