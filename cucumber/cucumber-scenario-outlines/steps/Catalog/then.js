import { Then } from '@wdio/cucumber-framework';
import checkTitle from '../../support/assertions/checkTitle';

Then(/^the title of the page should be "(.*)"$/, title => {
  checkTitle(title);
});