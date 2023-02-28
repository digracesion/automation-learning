const { chromium } = require('playwright');
// const { firefox } = require('playwright');

( async()=>{
    // create a browser object
    const browser = await chromium.launch({headless:false, slowMo: 100});
    // create a page in the browser
    const page  = await browser.newPage();
    // access a webpage
    await page.goto('https://demoqa.com/alerts');
    //listener for the confirm dialog event
    page.once('dialog', async dialog=>{
        console.log(dialog.message);
        await dialog.accept();
    });
    await page.click("#confirmButton");

    //listener for the alert dialog event
    page.once('dialog', async dialog=>{
        console.log(dialog.message);
        await dialog.accept('This is the dialog text');
    });
    await page.click('#promtButton');
    await browser.close();
})();