class BasePage{
    constructor(page){
        this.page = page;
    }
    async navigate(path){
        await this.page.goto(`https://demo.applitools.com/${path}`);
    }
}

// export module to make it accessible to other files
module.exports = BasePage;