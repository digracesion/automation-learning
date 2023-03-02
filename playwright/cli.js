const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_username');
  await page.locator('[data-test="username"]').press('Tab');
  await page.locator('[data-test="password"]').fill('secret');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('a').filter({ hasText: '1' }).click();
  await page.locator('[data-test="continue-shopping"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page.locator('a').filter({ hasText: '2' }).click();
  await page.locator('[data-test="remove-sauce-labs-bike-light"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('firstName');
  await page.locator('[data-test="firstName"]').press('Tab');
  await page.locator('[data-test="lastName"]').fill('secondName');
  await page.locator('[data-test="lastName"]').press('Tab');
  await page.locator('[data-test="postalCode"]').fill('5606');
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();
  await page.locator('[data-test="back-to-products"]').click();

  // ---------------------
  await context.close();
  await browser.close();
})();