const { firefox } = require('playwright');

( async()=>{
    // create a browser object
    const browser = await firefox.launch({headless:false, slowMo: 500});
    // new browser incognito context
    const context = await browser.newContext();
    // create a page in the browser
    const page  = await context.newPage();
    // access a webpage
    await page.goto('https://www.w3schools.com/howto/howto_css_custom_checkbox.asp');
    const checks = await page.$$('#main div :nth-child(1) input[type="checkbox"]');
    // check the second checkbox
    await checks[1].check();
    // uncheck the first checkbox
    await checks[0].uncheck();

    const radio_button = await page.$$('#main div :nth-child(1) input[type="radio"]');
    await radio_button[1].check();

    await context.close();
    await browser.close();
})();