const BasePage = require('./Base.page.js');

class HomePage extends BasePage{
    constructor(page){
        super(page);
        //locators on the home page
        this.loggedUser = '.logged-user-name';
        this.balanceValue = '.balance-value';
    }
    async navigate(){
        await super.navigate('app.html');
    }
    async getUserName(){
        let user = await this.page.$(this.loggedUser);
        return (await user.innerText());
    }
    async getBalance(balType){
        let balArray = await this.page.$$(this.balanceValue);
        if(balType == 'total'){
            return (await balArray[0].$('span').innerText());
        }
        else if(balType == 'credit'){
            return (await balArray[1].innerText());
        }
        else{
            return (await balArray[2].innerText());
        }
    }
}
module.exports = HomePage; 