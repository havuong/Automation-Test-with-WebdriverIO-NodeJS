let path = require('path');

describe('API Learning', () => {

    let pageUrl = 'https://webdriver.io/docs/api/browser/saveScreenshot.html';
    let screenShotPath = './screenShots/SaveScreenShot.png';

    it('Save ScreenShot', () => {

        browser.url(pageUrl);

        browser.saveScreenshot(path.join(__dirname, screenShotPath));

    });
});