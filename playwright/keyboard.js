const { chromium } = require('playwright');

( async()=>{
    // create a browser object
    const browser = await chromium.launch({headless:false, slowMo: 500});
    // create a page in the browser
    const page  = await browser.newPage();
    // access a webpage
    await page.goto('http://the-internet.herokuapp.com/key_presses');

    await page.click('input');
    await page.keyboard.type('sabi ng mama mo, and then exit vim');
    await page.keyboard.down('Shift');
    for (i=0; i< ' exit vim'.length; i++){
        await page.keyboard.press('ArrowLeft');
    }
    await page.keyboard.up('Shift');
    await page.keyboard.press('Backspace');
    await page.keyboard.type(' i am walking on sunshine');
    await browser.close();
})();