let path = require('path');

describe('API Learning', () => {

    let pageUrl = 'http://the-internet.herokuapp.com/upload';
    let chooseFileSelector = '#file-upload';
    let uploadBtnSelector = '#file-submit';

    it('Upload File', () => {

        browser.url(pageUrl);

        let fileToUploadRelativePath = path.join(__dirname, './toupload.txt');
        $(chooseFileSelector).waitForDisplayed(5000);
        $(chooseFileSelector).setValue(fileToUploadRelativePath);

        $(uploadBtnSelector).click();

        browser.pause(3000)
    });
});