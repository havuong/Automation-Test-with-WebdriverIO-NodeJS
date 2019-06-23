describe('API Learning', () => {

    let pageUrl = "http://the-internet.herokuapp.com/dropdown";
    let dropDownSelector = "#dropdown";

    it('Handle Dropdown menu', () => {

        browser.url(pageUrl);

        $(dropDownSelector).waitForDisplayed(5000);
        $(dropDownSelector).selectByVisibleText('Option 1');

        browser.pause(1000);

        $(dropDownSelector).selectByAttribute('value', '2');

        browser.pause(3000);
    });

});