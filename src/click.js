describe('API Learning', () => {
    const WAIT_TIME = 5000;
    let formAuthenLinkText = "=Form Authentication";
    let loginUrl = "http://the-internet.herokuapp.com/";
    let usernameSelector = '#username';
    let passwordSelector = '#password';

    it('Click on Link Text', () => {
        browser.url(loginUrl);

        $(formAuthenLinkText).waitForDisplayed(WAIT_TIME);
        $(formAuthenLinkText).click();

        $(usernameSelector).waitForDisplayed(WAIT_TIME);

        $(usernameSelector).setValue("Ha Vuong");
        $(passwordSelector).setValue("1234");

        browser.pause(3000);
    });
});