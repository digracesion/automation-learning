import { When } from "@wdio/cucumber-framework";
import signIn from "../../support/actions/signIn";

When(/^The user enters valid credentials, "(valid|invalid)", "(.*)" to login$/, emails => {
    (valid, email) => {
        signIn(valid === "valid" ? true : false, email);
    }
    
    console.log(emails)
});