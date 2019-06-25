let LoginPage = require('../page_objects/LoginPage_Type_3');

describe('Login Funtion', () => {

    before(() => {
        LoginPage.openTestingPage('/login');
    });

    it('Login Failed', () => {
        LoginPage
            .inputUsername('Hav')
            .inputPassword('123456')
            .clickOnLoginBtn();
    });

    it('Login Passed', () => {
        browser.url('/login')
        LoginPage
            .inputUsername('tomsmith')
            .inputPassword('SuperSecretPassword!')
            .clickOnLoginBtn();
    });

    after(() => {
        console.log('=> Testing DONE')
    });
});