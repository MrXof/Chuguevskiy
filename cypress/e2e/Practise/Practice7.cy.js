describe('Cookies',()=>{
    xit('Cookies',()=>{
        cy.viewport(1600,900);
        cy.visit('https://www.beaxy.com/');
        cy.wait(8000);
        cy.get('.modal-cookie-continue a',{timeout:4000}).click();
        cy.getCookie('beaxy_cookie_notificated',{timeout:4000}).should('have.property','value','true');
    });
    xit('setCookies',()=>{
        cy.viewport(1600,900);
        cy.visit('https://www.beaxy.com/');
        cy.wait(8000);
        cy.setCookie('alfaShool','true');
    });
    xit('clearCookies',()=>{
        cy.viewport(1600,900);
        cy.visit('https://www.beaxy.com/');
        cy.wait(8000);
        cy.clearCookies();
    });
    xit('clearCookie',()=>{
        cy.viewport(1600,900);
        cy.visit('https://www.beaxy.com/');
        cy.wait(8000);
        cy.clearCookie('_ga');   // cookie нужно вписать конкретный куки
    });
    xit('updateCookie',()=>{
        cy.viewport(1600,900);
        cy.visit('https://www.beaxy.com/');
        cy.wait(8000);
        cy.get('.modal-cookie-continue a',{timeout:4000}).click();
        cy.clearCookies('beaxy_cookie_notificated').then(function(){
            cy.setCookie('beaxy_cookie_notificated','false').then(function(){
                cy.getCookie('beaxy_cookie_notificated',{timeout:4000}).should('have.property','value','false');
            })
        })
    });
    xit('deleteValueCookie',()=>{
        cy.viewport(1600,900);
        cy.visit('https://www.beaxy.com/');
        cy.wait(8000);
        cy.get('.modal-cookie-continue a',{timeout:4000}).click();
        cy.clearCookies('beaxy_cookie_notificated').then(function(){
            cy.getCookie('beaxy_cookie_notificated').should('be.null');
        });
    });
    xit('checkLengthCookie',()=>{
        cy.viewport(1600,900);
        cy.visit('https://www.beaxy.com/');
        cy.wait(8000);
        cy.getCookies().should('have.length',3);
    });
    xit('checkClearCookies',()=>{
        cy.viewport(1600,900);
        cy.visit('https://www.beaxy.com/');
        cy.wait(8000);
        cy.clearCookies();
        cy.getCookies().should('be.empty');
    });
    it('localStorage',()=>{
        cy.viewport(1600,900);
        cy.visit('https://www.beaxy.com/');
        cy.wait(8000);
        cy.setLocalStorage('testKey','testValue');
        cy.getLocalStorage('testKey').should('equal','testValue');
        
    });
});