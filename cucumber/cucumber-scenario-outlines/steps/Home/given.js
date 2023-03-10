import { Given } from '@wdio/cucumber-framework';
import goToPage from '../../../support/actions/goToPage';

Given(/^The web browser is on the "(.*)" page$/, page => {
  goToPage(page);
});