describe('API Learning', () => {

    let pageUrl = "http://the-internet.herokuapp.com/dropdown";
    let hightlightTextSelector = "h3";
    let currentHighlightText;

    it('Learn getText API', () => {

        browser.url(pageUrl);

        $(hightlightTextSelector).waitForDisplayed(5000);
        currentHighlightText = $(hightlightTextSelector).getText();

        console.log(currentHighlightText);

        browser.pause(3000);
    });
});