const { chromium } = require('playwright');

( async()=>{
    // create a browser object
    const browser = await chromium.launch();
    // create a page in the browser
    const page  = await browser.newPage();
    // access a webpage
    await page.goto('https://www.applitools.com');
    //screenshot of the top part of the page
    await page.screenshot({path: 'appli-screenshot.png'});
    //screenshot of the logo only
    const logo = await page.$('.logo');
    await logo.screenshot({path: 'logo.png'});
    //full page screenshot
    await page.screenshot({path: 'full-screenshot.png', fullPage: true});

    await browser.close();
})();