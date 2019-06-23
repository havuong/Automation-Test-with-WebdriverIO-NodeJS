describe('API Learning', () => {

    let pageUrl = 'http://the-internet.herokuapp.com/';
    let jsLinkText = '=JavaScript Alerts';
    let jsCOnfirmElementSelector = '[onclick="jsConfirm()"]';

    it('Alert Handle', () => {

        browser.url(pageUrl);

        $(jsLinkText).waitForDisplayed(5000);
        $(jsLinkText).click();

        $(jsCOnfirmElementSelector).waitForDisplayed(5000);
        $(jsCOnfirmElementSelector).click();

        let alertText = browser.getAlertText();
        console.log('Alert Content: ', alertText);

        browser.acceptAlert();
        browser.pause(2000)

        $(jsCOnfirmElementSelector).click();

        browser.dismissAlert()

        browser.pause(2000);

    });
});