describe('API Learning', () => {

    let pageUrl = "http://the-internet.herokuapp.com/";
    let welcomeTextSelector = "h1";
    let currentUrl = "";
    let currentPageTitle = "";

    it('getUrl and getTitle API', () => {

        browser.url(pageUrl);
        $(welcomeTextSelector).waitForDisplayed(5000);

        currentUrl = browser.getUrl();

        currentPageTitle = browser.getTitle();

        console.log('Current URL: ', currentUrl);
        console.log('Current Page Title: ', currentPageTitle);

    });

});