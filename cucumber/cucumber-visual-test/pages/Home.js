class Home {
    get url() {
      return "/";
    }
  
    get searchField() {
      return $("#search_query_top");
    }
  
    get searchButton() {
      return $(".btn.btn-default.button-search");
    }
  
    search(keyword) {
      this.searchField.waitForDisplayed(5000);
      this.searchField.click();
      this.searchField.setValue(keyword);
      this.searchButton.click();
    }
}
module.exports = new Home();