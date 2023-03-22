const expect = require('chai').expect
const { chromium } = require('playwright');

const cp = require('child_process');
const clientPlaywrightVersion = cp.execSync('npx playwright --version').toString().trim().split(' ')[1];
const bsLocal = new BrowserStackLocal.local();

(async () => {
  const caps = {
  	'browser': 'chrome',  // allowed browsers are `chrome`, `edge`, `playwright-chromium`, `playwright-firefox` and `playwright-webkit`
    'os': 'osx',
    'os_version': 'Ventura',
    'name': 'Playwright Tests with Browserstack Local',
    'build': 'playwright-build-2',
    'browserstack.username': process.env.BROWSERSTACK_USERNAME || 'marygrygjeannegr_quDoxC',
    'browserstack.accessKey': process.env.BROWSERSTACK_ACCESS_KEY || 'sazGCeFVuATXQLjRDBtL',
    'browserstack.debug':'true',
    'browserstack.console':'enable',
    'browserstack.networkLogs':'true',
    'browserstack.networkLogsOptions':{
      'captureContent':'true'
    },
    'client.playwrightVersion': clientPlaywrightVersion  // Playwright version being used on your local project needs to be passed in this capability for BrowserStack to be able to map request and responses correctly
  };
  const BS_LOCAL_ARGS={
    'key':process.env.BROWSERSTACK_ACCESS_KEY
  };
  bsLocal.start(BS_LOCAL_ARGS,testFn);

  console.log(`BrowserStackLocal running: ${bsLocal.isRunning()}`);
  const browser = await chromium.connect({
    wsEndpoint: `wss://cdp.browserstack.com/playwright?caps=${encodeURIComponent(JSON.stringify(caps))}`,
  });
  
  const page = await browser.newPage();
  await page.goto('https://www.google.com/');
  const element = await page.$('[aria-label="Search"]');
  await element.click();
  await element.type('Browser Stack');
  await element.press('Enter');
  const title = await page.title('');
  console.log(title);
  try {
    expect(title).to.equal("BrowserStack - Google Search", 'Expected page title is incorrect!');
    // following line of code is responsible for marking the status of the test on BrowserStack as 'passed'. You can use this code in your after hook after each test
    await page.evaluate(_ => {}, `browserstack_executor: ${JSON.stringify({action: 'setSessionStatus',arguments: {status: 'passed',reason: 'Title matched'}})}`);
  } catch {
    await page.evaluate(_ => {}, `browserstack_executor: ${JSON.stringify({action: 'setSessionStatus',arguments: {status: 'failed',reason: 'Title did not match'}})}`);
  }
  await browser.close();
})();
