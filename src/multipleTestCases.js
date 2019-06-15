let path = require('path');

describe('APi Learning', () => {

    it('alert handle', () => {
        let pageUrl = 'http://the-internet.herokuapp.com/';
        let jsLinkText = '=JavaScript Alerts';
        let jsCOnfirmElementSelector = '[onclick="jsConfirm()"]';
        
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

    it('uploadFile', () => {
        let pageUrl = 'http://the-internet.herokuapp.com/upload';
        let chooseFileSelector = '#file-upload';
        let uploadBtnSelector = '#file-submit';

        browser.url(pageUrl);

        let fileToUploadRelativePath = path.join(__dirname, './toupload.txt');
        $(chooseFileSelector).waitForDisplayed(5000);
        $(chooseFileSelector).setValue(fileToUploadRelativePath);

        $(uploadBtnSelector).click();

        browser.pause(3000);
    });
});