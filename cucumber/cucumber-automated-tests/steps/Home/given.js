import { Given } from '@wdio/cucumber-framework';
import login from '../../pages/Login.Page';

import goToPage from '../../support/actions/goToPage';

Given(/^The web browser is on the "(Home|Login)" page$/, page => {
  goToPage(page);
});