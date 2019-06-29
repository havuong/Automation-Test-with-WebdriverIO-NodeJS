let LoginData = require('../test_data/TC_001_Login');

let LoginPage = require('../page_objects/Login');

describe('LOGIN', () => {

    const INVALID_LOGIN_USERNAME = LoginData.INVALID_LOGIN_USERNAME;

    before(() => {
        browser.url('/login');
    });

    it('Login with wrong username', () => {
        LoginPage
            .inputUsername(INVALID_LOGIN_USERNAME.username)
            .inputPassword(INVALID_LOGIN_USERNAME.password)
            .clickOnLoginBtn();

        LoginPage.verifyInvalidUsernameText();
    });

});