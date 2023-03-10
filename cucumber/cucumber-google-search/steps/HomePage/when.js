import { When } from '@wdio/cucumber-framework';
import search from '../../support/actions/search'

When(/^The user enters "(.*)" into the search bar$/, keyword => {
  search(keyword);
});