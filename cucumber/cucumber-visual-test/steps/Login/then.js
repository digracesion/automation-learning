import { Then } from "@wdio/cucumber-framework";
import checkAuthError from "../../support/assertions/checkAuthError";

Then(/^an authentication error message should say "(.*)"$/, errorMessage => {
  checkAuthError(errorMessage);
});

Then("they are successfully logged in", () => {
  try {
    browser.call(() => eyes.open(browser));
    browser.call(() => eyes.check("Login Page", Target.window().fully()));
    // passing false prevents this part from throwing an exception
    browser.call(() => eyes.close(false));
  } catch (e) {
    console.log(e);
  } finally {
    browser.call(() => eyes.abortIfNotClosed());
  }
});