class Cookies {
    selector ={ 
    cookiesClose:()=> cy.get("#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll.CybotCookiebotDialogBodyButton",{timeout:1500}),
    };

    cookieClose(){
        this.selector.cookiesClose().should('be.visible').click();
    }
 }module.exports = new Cookies();

class mainTest{
    selector={
        buttonBuy:()=>cy.get("[aria-label='Navigation'] a[href='/ru/buy']",{timeout:1500}),
        maxonButtonBuy:()=> cy.get('#annual article .card-actions a:nth-child(1)',{timeout:1500}),
        firstCheckTextTotalVat:()=> cy.get("[class='row'] [id='cartTotalsTable'] :nth-child(1) [class='col-5 text-end']",{timeout:1500}).contains('1.351,77 €'),
        secondCheckTextTotalVat:()=>cy.get("[class='row'] [id='cartTotalsTable'] :nth-child(2) [class='col-7 text-end'] ",{timeout:1500}).contains('Total Incl. VAT'),
    };
    buttonsBuy(){
        this.selector.buttonBuy().should('be.visible').click();
    };
    maxonsButtonBuy(){
        this.selector.maxonButtonBuy().should('be.visible').click();
    };
    checkTextsTotalVat(){
        this.selector.firstCheckTextTotalVat();
    };
    secondCheckVat(){
        this.selector.secondCheckTextTotalVat();
    };
}module.exports = new mainTest();

class secondTest{
    selector={
        clickTheButtonNews:()=>cy.get("#desktop-nav-dropdown-control-1336349"),
    };
    ckickButtonNews(){
        this.selector.clickTheButtonNews().should('be.visible');
    }
}module.exports = new secondTest();
