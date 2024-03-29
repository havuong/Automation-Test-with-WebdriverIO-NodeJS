const USER_NAME_TXTBX = '#username';
const PASSWORD_TXTBX = '#password';
const LOGIN_BTN = '[type="submit"]';
const LOGIN_ERR_TXT = "#flash-messages";

class Login {

    waitForUsernameDisplayed() {
        $(USER_NAME_TXTBX).waitForDislayed(15000);
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
    
    getLoginErrorText(){
        return $(LOGIN_ERR_TXT).getText();
    }

    verifyInvalidUsernameText() {
        let currentLoginErr = this.getLoginErrorText();
        let expectedErrText = "Your username is invalid!";

        expect(currentLoginErr).to.include(expectedErrText);
    }

    verifyInvalidPasswordText() {
        let currentLoginErr = this.getLoginErrorText();
        let expectedErrText = "Your password is invalid!";

        expect(currentLoginErr).to.include(expectedErrText);
    }

}
module.exports = new Login();