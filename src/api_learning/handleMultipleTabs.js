describe('API Learning', () => {

    let pageUrl = 'https://webdriver.io/docs/api.html';
    let editBtnSelector = '.edit-page-link.button';

    it('Handle Multiple Windows', () => {

        browser.url(pageUrl);

        $(editBtnSelector).waitForDisplayed(5000);
        $(editBtnSelector).click();

        let allWindowsIds = browser.getWindowHandles();
        console.log(allWindowsIds);

        let firstWindowId = allWindowsIds[0];
        let secondWindowId = allWindowsIds[1];

        browser.switchToWindow(secondWindowId);

        let secondWindowTitle = browser.getTitle();
        console.log('2nd Window Title: ', secondWindowTitle);

        browser.switchToWindow(firstWindowId);

        let firstWindowTitle = browser.getTitle();
        console.log('1st Window Title: ', firstWindowTitle);

        browser.pause(2000);
    });
});