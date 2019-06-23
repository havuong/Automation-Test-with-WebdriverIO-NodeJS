let LoginPage = require('../page_objects/LoginPage_Type_2');

describe('PO type 2', () => {

    it('Login to the Page', () => {

        browser.url("http://the-internet.herokuapp.com/login");

        // Set creds
        LoginPage.waitForUsernameDisplayed();
        LoginPage.setCreds('HaV', '12343456');

        browser.pause(2000);
    });
});