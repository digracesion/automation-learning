import { Then } from '@wdio/cucumber-framework';
import checkNoResultsError from '../../support/assertions/checkNoResults';
import checkProducts from '../../support/assertions/checkProducts';
import checkProductsContain from '../../support/assertions/checkProductsContain';
import checkTitle from '../../support/assertions/checkTitle';

Then(/^(no )? products are listed$/, notListed => {
  if (notListed){
    checkProducts(false);
  }
  else{
    checkProducts(true);
  }
});

Then("a no results error message is shown", ()=>{
  checkNoResultsError();
});

Then(/^search results show products related to "(.*)"$/, keyword => {
  checkProductsContain(keyword);
});

Then(/^the title of the page should be "(.*)"$/, title => {
  checkTitle(title);
});