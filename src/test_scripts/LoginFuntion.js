let LoginPage = require('../page_objects/LoginPage_Type_3');

describe('Login Funtion', () => {

    before(() => {
        console.log('\tOpen Testing Page');
        LoginPage.openTestingPage('/login');
    });

    beforeEach(() => {
        console.log('\tBefore Script');
    });

    it('Login Failed', () => {
        console.log('\tTestcase 1: Login Failed');
        LoginPage
            .inputUsername('Hav')
            .inputPassword('123456')
            .clickOnLoginBtn();
    });

    it('Login Passed', () => {
        console.log('\tTestcase 2: Login Passed');
        browser.url('/login')
        LoginPage
            .inputUsername('tomsmith')
            .inputPassword('SuperSecretPassword!')
            .clickOnLoginBtn();
    });

    afterEach(() => {
        console.log('\tAfter Script')
    });

    after(() => {
        console.log('=> Testing DONE')
    });
});