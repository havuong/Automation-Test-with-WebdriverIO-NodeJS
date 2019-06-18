describe('API Learning', () => {

    let pageUrl = "http://the-internet.herokuapp.com/login";
    let formAuthenLinkText = '=Form Authentication';
    let usernameSelector = "#username";
    let passwordSelector = "#password";
    let loginBtn = '[type="submit"]';
    let welcomeTextSelector = 'h2';

    it('Wait for Disappeared', () => {

        browser.url(pageUrl);

        $(usernameSelector).waitForDisplayed(5000);
        $(usernameSelector).setValue('tomsmith');
        $(passwordSelector).setValue('SuperSecretPassword!');

        $(loginBtn).click();

        $(loginBtn).waitForDisplayed(5000, true, '[ERR] Login process takes longer than 5s');

        let welcometext = $(welcomeTextSelector).getText();
        console.log(welcometext);
    });
});