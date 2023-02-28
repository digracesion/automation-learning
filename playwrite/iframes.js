const { webkit } = require('playwright');

( async()=>{
    // create a browser object
    const browser = await webkit.launch({headless:false, slowMo: 100});
    // create a page in the browser
    const page  = await browser.newPage();
    // access a webpage
    await page.goto('https://demoqa.com/frames');

    // logic to handle the iframe
    const frame1 = await page.frame({ url: /\/sample/ });

    // locating h1 element handle inside frame 
    const heading1 = await frame1.$('h1');
    console.log(await heading1.innerText());
    await browser.close();
})();