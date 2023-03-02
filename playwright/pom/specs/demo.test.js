const { chromium } = require('playwright');
const HomePage = require('../models/Home.page.js');
const LoginPage = require('../models/Login.page.js');

describe(`Applitools Demo Page`, () => {
    jest.setTimeout(30000);
    
    let browser = null;
    let page = null;
    let context = null;
    let homepage = null;
    let loginpage = null;

    beforeAll(async() =>{
      browser = await chromium.launch({headless: false});
      context = await browser.newContext();
      page = await context.newPage();
      homepage = new HomePage(page);
      loginpage = new LoginPage(page);
      await loginpage.navigate();
    });

    afterAll(async() =>{
        await context.close();
        await browser.close();
    });
    
    it(`Should be able to login`, async() =>{
        await loginpage.login('username123','password123');
        expect(page).not.toBeNull();
        expect(await page.title()).not.toBeNull();
    });

    it(`Should be logged in as Jack Gomez`, async() =>{
        expect(await homepage.getUserName().toBe('Jack Gomez'));
    });

    it(`Should have a total balance of $350`, async() =>{
        expect(await homepage.getBalance('total').toBe('$350'));
    });

    it(`Should have a $17,800 credit available`, async() =>{
        expect(await homepage.getBalance('credit').toBe('$17,800'));
    });

    it(`Should have $180 due today`, async() =>{
        expect(await homepage.getBalance('due').toBe('$180'));
    });
});