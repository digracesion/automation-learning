import { When } from "@cucumber/cucumber";
import search from '../../support/actions/search'

When(/^The user enters "(.*)" into the search bar$/, keyword => {
  search(keyword);
});