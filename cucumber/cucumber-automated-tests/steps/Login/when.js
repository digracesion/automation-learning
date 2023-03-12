import { When } from "@wdio/cucumber-framework";
import signIn from "../../support/actions/signIn";

When(/^The user enters valid credentials, "(.*)" to login$/, emails => {
    signIn(emails);
    console.log(emails)
});