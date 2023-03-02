const { chromium } = require('playwright');
// const { firefox } = require('playwright');

( async()=>{
    // create a browser object
    const browser = await chromium.launch({headless:false, slowMo: 100});
    // create a page in the browser
    const page  = await browser.newPage();
    // access a webpage
    await page.goto('https://www.google.com');
    page.once('load', () => console.log('Page loaded!'));
    await page.screenshot({path: 'screenshot.png'});
    await browser.close();
})();