const { chromium } = require('playwright');

( async()=>{
    // create a browser object
    const browser = await chromium.launch({headless:false, slowMo: 500});
    // create a context to record the video
    const context = await browser.newContext({
        recordVideo: {
            dir:"./recordings"
        }
    });
    // create a page in the context
    const page  = await context.newPage();
    // navigate to the website
    await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');
    //click on the button
    try {
        // Crash might happen during a click.
        await page.click('button');
        // Or while waiting for an event.
        // wait for the hidden element to appear
        page.waitForSelector('#loading');
        // wait for the hidden element to disappear
        page.waitForSelector('#loading', { state: 'hidden' });
        page.waitForTimeout(5000);
    } catch (error) {
        // When the page crashes, exception message contains 'crash'.
        console.error("The application crashed");
    }
    await browser.close();
})();