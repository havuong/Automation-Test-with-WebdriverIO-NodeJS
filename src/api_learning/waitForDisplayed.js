describe('API Learning', () => {
    let loginUrl = "http://the-internet.herokuapp.com/login";
    let usernameSelector = '#username';
    let passwordSelector = '#password';

    it('waitForDisplayed', () => {
        browser.url(loginUrl);

        $(usernameSelector).waitForDisplayed(5000);
        
        $(usernameSelector).setValue("Ha Vuong");
        $(passwordSelector).setValue("1234");

        browser.pause(3000);
    });
});