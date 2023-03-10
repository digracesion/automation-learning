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
    
    get womenMenuOption(){
      return $('ul.menu-content >li >a[title="Women"]');
    }

    get dressesMenuOption(){
      return $('ul.menu-content >li >a[title="Dresses"]');
    }

    get tShirtMenuOption(){
      return $('ul.menu-content >li >a[title="T-Shirts"]');
    }

    search(keyword) {
      this.searchField.waitForDisplayed(5000);
      this.searchField.click();
      this.searchField.setValue(keyword);
      this.searchButton.click();
    }

    selectMenuOption(option){
      if(option == "Women"){
        this.womenMenuOption.click();
      }
      else if(option == "Dresses"){
        this.dressesMenuOption.click();
      }
      else if(option == "T-Shirts"){
        this.dressesMenuOption.click();
      }
      else{
        console.log(`Invalid option ${option}`);
      }
    }
}
module.exports = new Home();