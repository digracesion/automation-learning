const BasePage = require('./Base.page.js');

class LoginPage extends BasePage{
    constructor(page){
        super(page);
        //locators on the login page
        this.userTxt = '#username';
        this.passwordTxt = '#password';
        this.loginBtn = '#log-in';
    }
    async navigate(){
        await super.navigate('index.html');
    }
    async login(username, password){
        await this.page.fill(this.userTxt, username);
        await this.page.fill(this.passwordTxt, password);
        await this.page.click(this.loginBtn);
    }
}
module.exports = LoginPage; 