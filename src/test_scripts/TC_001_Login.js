let LoginData = require('../test_data/TC_001_Login');

let LoginPage = require('../page_objects/Login');
let WelcomePage = require('../page_objects/Welcome');

describe('LOGIN', () => {

    const VALID_LOGIN_CREDS = LoginData.VALID_LOGIN_CREDS;
    const INVALID_LOGIN_CREDS = LoginData.INVALID_LOGIN_CREDS;

    before(() => {
        browser.url('/login')
    });

    it('Login OK', () => {
        LoginPage
            .inputUsername(VALID_LOGIN_CREDS.username)
            .inputPassword(VALID_LOGIN_CREDS.password)
            .clickOnLoginBtn();

        let currentWelcomeText = WelcomePage.getWelcomeText();
        let expectedWelcomeText = "Welcome to the Secure Area. When you are done click logout below.";

        expect(currentWelcomeText).to.equal(expectedWelcomeText, '[ERR] Welcome text is wrong TC_001');
    });

    it.skip('Login FAILED', () => {
        browser.url('/login')

        LoginPage
            .inputUsername(INVALID_LOGIN_CREDS.username)
            .inputPassword(INVALID_LOGIN_CREDS.password)
            .clickOnLoginBtn();
    });
});