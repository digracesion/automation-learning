const { chromium } = require('playwright');

( async()=>{
    // create a browser object
    const browser = await chromium.launch({headless:false, slowMo: 300});
    // create a page in the browser
    const page  = await browser.newPage();
    // access a webpage
    await page.goto('http://the-internet.herokuapp.com/dropdown');
    const dropdown = await page.$('#dropdown');
    await dropdown.selectOption({value:'1'});
    await dropdown.selectOption({label:'Option 2'});
    await dropdown.selectOption({index: 1});

    const availableOptions = await dropdown.$$('option');
    for (let i=0; i<availableOptions.length; i++){
        console.log(await availableOptions[i].innerText());
    }
    await browser.close();
})();