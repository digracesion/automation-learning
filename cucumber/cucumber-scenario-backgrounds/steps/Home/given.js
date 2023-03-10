import { Given } from "@cucumber/cucumber";
import goToPage from '../../../support/actions/goToPage';

Given(/^The web browser is on the "(.*)" page$/, page => {
  goToPage(page);
});