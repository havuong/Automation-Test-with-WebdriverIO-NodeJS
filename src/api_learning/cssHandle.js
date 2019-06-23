describe('API Learning', () => {

    let pageUrl = 'http://the-internet.herokuapp.com/';
    let welcomeTextSelector = 'h1';

    it('Get Color CSS value', () => {

        browser.url(pageUrl);

        $(welcomeTextSelector).waitForDisplayed(5000);
        let colorValue = $(welcomeTextSelector).getCSSProperty('color');

        console.log('Color Value: ', colorValue.parsed.hex);

    });
});