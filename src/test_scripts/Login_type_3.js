let LoginPage = require('../page_objects/LoginPage_Type_3');

describe('PO type 3', () => {

    it('Login To the page', () => {

        LoginPage.openTestingPage('/login');
        
        LoginPage
            .inputUsername('Hav')
            .inputPassword('123456')
            .clickOnLoginBtn();
        
        browser.pause(2000);
    });
});