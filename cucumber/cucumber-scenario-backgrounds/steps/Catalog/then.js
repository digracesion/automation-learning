import { Then } from '@cucumber/cucumber';
import checkNoResultsError from '../../support/assertions/checkNoResults';
import checkProducts from '../../support/assertions/checkProducts';
import checkProductsContain from '../../support/assertions/checkProductsContain';

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