import { Then } from '@wdio/cucumber-framework';
import verifyLinksContain from "../../pages/SearchResults";

Then(/^links related to "(.*)" are shown on the results page$/, keyword => {
  verifyLinksContain(keyword);
});