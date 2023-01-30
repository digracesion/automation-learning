const puppeteer = require('puppeteer');

// automate failure scenario by entering the wrong username/password
async function testLoginFail(browser) {
  const page = await browser.newPage();
  // test login failure
  await page.goto('https://github.com/login');
  await page.type('#login_field', ':grinning::smiley:');
  await page.type('#password', 'password1234567890');
  await page.click('.js-sign-in-button');
  const url = await page.url();
  const login = 'https://github.com/session';
  if (url.toString() === login) {
    //throw new Error("Incorrect username or password entered --> Fail Path");
    console.log("Incorrect username or password entered --> fail path");
  }
  else{
    console.log("Login successful --> fail path");
  }
  await page.close();
}

// automate success scenario by entering the correct username/password
async function testLoginSuccess(browser) {
  const page = await browser.newPage();
  await page.goto('https://github.com/login');
  await page.type('#login_field', 'username');
  await page.type('#password', 'password');
  await page.click('.js-sign-in-button');
  await page.waitForTimeout(5000); // wait for 5 seconds
  await page.goto('https://github.com/settings/profile');

  //verify if the current account can check profile settings
  const url = await page.url();
  const profile = 'https://github.com/settings/profile';
  if (url.toString() !== profile) {
    //throw new Error("Incorrect username or password entered --> Success Path");
    console.log("Incorrect username or password entered --> success path");
  }
  else{
    console.log("Login successful --> success path");
  }
  await page.close();
}

async function testLogin() {
  // run headless as false to verify the results through the UI
  const browser = await puppeteer.launch({
    headless: false
  });

  try {
    //run fail test scenario
    await testLoginFail(browser);
    await testLoginSuccess(browser);
  } finally {
    // after running the test, close the browser
    console.log("Exit browser");
    await browser.close();
  }
}

//execute the test

(async () => {
  try {
    await testLogin();
  } catch (error) {
    console.log("Test Failed:", error.message);
  }
})();
