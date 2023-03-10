import { When } from "@wdio/cucumber-framework";
import search from '../../support/actions/search';
import selectMenuOption from "../../support/actions/selectMenuOption";

When(/^The user clicks on the "(.*)" menu option in the menu $/, option => {
  search(option);
});