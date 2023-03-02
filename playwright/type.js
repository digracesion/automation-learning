const { chromium } = require('playwright');

( async()=>{
    // create a browser object
    const browser = await chromium.launch({headless:false, slowMo: 100});
    // create a page in the browser
    const page  = await browser.newPage();
    // access a webpage
    await page.goto('http://the-internet.herokuapp.com/forgot_password');
    const email = await page.$('#email');
    await email.type('panotsky999@gmail.com',{delay: 50});
    await page.click('#form_submit');
    await browser.close();
})();