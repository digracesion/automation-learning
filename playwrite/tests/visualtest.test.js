const { chromium } = require('playwright');
const { ClassicRunner, Eyes, Target, RectangleSize } = require('@applitools/eyes-playwright');

describe(`UI tests for dynamic content using playwright and applitools`, () => {
    jest.setTimeout(30000);
    
    let browser = null;
    let page = null;
    let context = null;
    // let firstRowCells = null;

    const eyes = new Eyes(new ClassicRunner());

    beforeAll(async() =>{
      browser = await chromium.launch({headless: false});
      context = await browser.newContext();
      page = await context.newPage();
      await page.goto('https://the-internet.herokuapp.com/dynamic_content');
    });

    afterAll(async() =>{
       await browser.close();
    });
    
    test(`Should load page`, async() =>{
        expect(page).not.toBeNull();
        expect(await page.title()).not.toBeNull();
    });

    test(`Should be able to check the page`, async() =>{
        await page.waitForSelector('h3', {state: 'attached'});
        const viewport = new RectangleSize(800, 600)
        await eyes.open(page, 'The Internet Heroku', 'Dynamic Content Test', viewport);
        await eyes.check(Target.window().fully());
        await eyes.close();
    });

});