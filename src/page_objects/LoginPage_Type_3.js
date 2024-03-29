let LoginBase = require('./LoginBase.js');

const USER_NAME_TXTBX = '#username';
const PASSWORD_TXTBX = '#password';
const LOGIN_BTN = '[type="submit"]';

class LoginPage extends LoginBase{

    waitForUsernameDisplayed() {
        $(USER_NAME_TXTBX).waitForDisplayed(5000);
    }

    inputUsername(username) {
        $(USER_NAME_TXTBX).setValue(username);
        return this;
    }

    inputPassword(password) {
        $(PASSWORD_TXTBX).setValue(password);
        return this;
    }

    clickOnLoginBtn() {
        $(LOGIN_BTN).click();
        return this;
    }

}
module.exports = new LoginPage();