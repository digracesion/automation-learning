//function for all the features of the auto to-do
var autoToDo = new function(){
    this.clickItem = function(item){
        item.click();
    }
    this.toggleAll = function(){
        clickItem(document.querySelector("#toggle-all"));
    }
    this.selectItemX = function(x){
        document.querySelector("ul.todo-list > li:nth-child(" + x + ") input.toggle").click();
    }
    this.deleteItemX = function(x){
        document.querySelector("ul.todo-list > li:nth-child(" + x + ") button.destroy").click();
    }
    this.clearCompleted = function(){
        document.querySelector("button.clear-completed").click();
    }
    this.filterCompleted = function(){
        location.hash = "/completed";
    }
    this.filterAll = function(){
        location.hash = "/";
    }
    
    this.filterActive = function(){
        location.hash = "/active";
    }
    this.createToDo = function(name){
        document.querySelector("input.new-todo").value=name;
        document.querySelector("input .new-todo").dispatchEvent(new Event("change",{"bubbles": true}));
    }
    this.amendToDo = function(x, amendedValue){
        document.querySelector("ul.todo-list > li:nth-child("+ x +") > div > label").dispatchEvent(new Event("dblclick",{"bubbles": true}));
        document.querySelector("ul.todo-list > li:nth-child("+ x +") .edit").value=amendedValue;
        document.querySelector("ul.todo-list > li:nth-child("+ x +") .edit").dispatchEvent(new Event("blur"));
    }
    
}

//create 100 to-dos for every 100ms using setTimeout
for (x=1; x<=100; x++){
    setTimeout(autoToDo.createToDo, x*100, "todo " + x);
}

//create 100 to-dos for every 500ms using setInterval
var botToDoCount = 0;
var creatorBot = setInterval(
    function(){
        document.querySelector("input.new-todo").value = "todo" + botToDoCount;
        document.querySelector("input .new-todo").dispatchEvent(new Event("change",{"bubbles": true}));
        botToDoCount++;
        if (botToDoCount>=100){
            //self-destruct mechanism
            clearInterval(creatorBot);
        }
    },
500);

