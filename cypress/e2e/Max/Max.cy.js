import Cookies from "./PageObject" 
import mainTest from "./PageObject"
import secondTest from "./PageObject"
describe('TestCheckButton',()=>{
    before('',()=>{
        cy.visit('https://www.maxon.net/ru/');
        cy.wait(2000);
    })
    xit('CheckNewFlow',()=>{
        Cookies.cookieClose();
        mainTest.buttonsBuy();
        mainTest.maxonsButtonBuy();
        mainTest.checkTextsTotalVat();
        mainTest.secondCheckVat();
    })
    it('Second Task',()=>{
        Cookies.cookieClose();
        secondTest.ckickButtonNews();
    })

});
