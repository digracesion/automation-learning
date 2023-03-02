const { chromium, devices } = require('playwright');
const iPhone = devices['iPhone 11'];
const firefox = devices['Desktop Firefox'];
const webkit = devices['Desktop Safari'];
( async()=>{
    // create a browser object
    const browser = await chromium.launch({headless: false, slowMo: 300});
    // create a page in the browser
    const contextiPhone = await browser.newContext({
        ...iPhone,
        permissions:['geolocation'],
        geolocation:{latitude: 35.45992728542313, longitude: 139.63598927721992},
        locale: 'jp-JP'
    });
    const pageiPhone  = await contextiPhone.newPage();
    // access a webpage
    await pageiPhone.goto('https://www.google.com/maps');
    await pageiPhone.waitForTimeout(5000);

    const contextFireFox = await browser.newContext({
        ...firefox,
        permissions:['geolocation'],
        geolocation:{latitude: 35.45992728542313, longitude: 139.63598927721992},
        locale: 'fr-FR'
    });
    const pageFireFox  = await contextFireFox.newPage();
    await pageFireFox.goto('https://www.google.com/maps');
    await pageFireFox.waitForTimeout(5000);

    const contextWeb = await browser.newContext({
        ...webkit,
        permissions:['geolocation'],
        geolocation:{latitude: 35.45992728542313, longitude: 139.63598927721992}
    });
    const pageWeb  = await contextWeb.newPage();
    await pageWeb.goto('https://www.google.com/maps');
    await pageWeb.waitForTimeout(5000);

    await browser.close();
})();