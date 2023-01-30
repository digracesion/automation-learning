// list all the functions created in autoToDo
for(var prop in autoToDo){
    if(typeof autoToDo[prop]==  'function'){
        console.log(prop);
    }
}

var rando = new function(){
    function getRandomInt(x){
        return Math.floor(Math.random()*x);
    }
    function getRandomItemIndex(){
        max = document.querySelectorAll("ul.todo-list li").length;
        if(max==0){
            console.log("No items to choose from");
            return 0;
        }
        else{
            x = getRandomInt(max)+1;
            return x;
        }
        //wrapper for selecting random item from the list
        this.selectRandomItem = function(){
            x = getRandomItemIndex();
            if (x>0){
                console.log("select item " + x);
                autoToDo.selectItemX(x);
            }
        }
        //wrapper for toggling all of the items in the list
        this.toggleAll = function(){
            console.log("toggle all");
            autoToDo.toggleAll();
        }
        //wrapper for creating a random entry for the to-do list
        this.createRandomTodo = function(){
            autoToDo.createToDo("random to-do " + Date.now());
        }
        //wrapper for amending a random entry from the to-do list
        this.amendRandomTodo = function(){
            x = getRandomItemIndex();
            if(x>0){
                console.log("amend to-do " + x);
                autoToDo.amendToDo(x, "amended random to-do " + Date.now());
            }
        }
    }
}

theFunctions = [];
for (var prop in rando){
    if(typeof(rando[prop]=='function')){
        theFunctions.push(prop);
    }
}
var randomFunctionIndex = Math.floor(Math.random()*theFunctions.length);
rando[theFunctions[randomFunctionIndex]]();