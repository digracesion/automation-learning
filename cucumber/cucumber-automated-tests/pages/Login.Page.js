
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get emailInput () {
        return $('#email');
    }

    get passwordInput () {
        return $('#password');
    }

    get signInButton () {
        return $('#SubmitLogin');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    signIn(email, password){
        this.emailInput.waitForDisplayed(5000);
        this.emailInput.setValue(email);
        this.passwordInput.setValue(password);
        this.signInButton.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('?controller=authentication');
    }
}

module.exports = new LoginPage();
