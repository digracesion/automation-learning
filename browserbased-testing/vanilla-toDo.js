// toggle all to-dos
document.querySelector("#toggle-all").click();
//toggle the first to-do
document.querySelector("ul.todo-list > li:nth-child(1) input.toggle").click();
//delete to-do without activating hover
document.querySelector("ul.todo-list > li:nth-child(1) button.destroy").click();
// clear all completed to-dos
document.querySelector("button.clear-completed").click();
// show all
document.querySelector("ul.filters > li:nth-child(1) > a").click();
// show active
document.querySelector("ul.filters > li:nth-child(2) > a").click();
location.hash = "/active"
//show completed
document.querySelector("ul.filters > li:nth-child(3) > a").click();
location.hash = "/completed";
// show current selected filter
location.hash
//enter the new value to the input box
document.querySelector("input.new-todo").value="hello";
document.querySelector("input.new-todo").value="hello there";
//trigger bubbles up to change the event
document.querySelector("input .new-todo").dispatchEvent(new Event("change",{"bubbles": true}));

//amending an item
document.querySelector("ul.todo-list > li:nth-child(2) > div > label");
document.querySelector("ul.todo-list > li:nth-child(2) > div > label").dispatchEvent(new Event("dblclick",{"bubbles": true}));

document.querySelector("ul.todo-list > li:nth-child(2) .edit").value="amended";
document.querySelector("ul.todo-list > li:nth-child(2) .edit").dispatchEvent(new Event("blur"));

//creating a for-loop
for(var counter=1; counter <= 20; counter++){
    console.log("Hello " + counter);
}
//get all the selectors with the class name toggle
document.querySelectorAll(".toggle");
// get the first element of the array with the class name "toggle"
document.querySelectorAll(".toggle")[0];
// get the number of items inside the array
var toggles = document.querySelectorAll(".toggle");
// toggle every item in the list
for(togglepos = 0; togglepos< toggles.length; togglepos++){
    toggles[togglepos].click();
}
//toggle every second item in the loop
for(togglepos = 0; togglepos< toggles.length; togglepos++){
    if(togglepos%2 == 1){
        toggles[togglepos].click();
    }
}
for(togglepos = 1; togglepos< toggles.length; togglepos+=2){
    toggles[togglepos].click();
}
//toggle every first item in the loop
for(togglepos = 0; togglepos< toggles.length; togglepos+=2){
    toggles[togglepos].click();
}

//function to toggle a single item
function clickItem(item){
    item.click();
}
//function to toggle all items
function toggleAll(){
    clickItem(document.querySelector("#toggle-all"));
}
toggleAll();

//call click item for each toggles
var toggles = document.querySelectorAll(".toggle");
toggles.forEach(clickItem);

//function to toggle an item given a position in the list
function selectItemX(x){
    document.querySelector("ul.todo-list > li:nth-child(" + x + ") input.toggle").click();
}
selectItemX(1);

//function to delete an item given a position in the list
function deleteItemX(x){
    document.querySelector("ul.todo-list > li:nth-child(" + x + ") button.destroy").click();
}
deleteItemX(2);

//function to clear all completed tasks
function clearCompleted(){
    document.querySelector("button.clear-completed").click();
}
clearCompleted();

//functions to switch through the different filters
function filterCompleted(){
    location.hash = "/completed";
}

function filterAll(){
    location.hash = "/";
}

function filterActive(){
    location.hash = "/active";
}

// function to create a to-do entry

function createToDo(name){
    document.querySelector("input.new-todo").value=name;
    document.querySelector("input .new-todo").dispatchEvent(new Event("change",{"bubbles": true}));
}
createToDo("hello");

// function to amend an item
function amendToDo(x, amendedValue){
    document.querySelector("ul.todo-list > li:nth-child("+ x +") > div > label").dispatchEvent(new Event("dblclick",{"bubbles": true}));
    document.querySelector("ul.todo-list > li:nth-child("+ x +") .edit").value=amendedValue;
    document.querySelector("ul.todo-list > li:nth-child("+ x +") .edit").dispatchEvent(new Event("blur"));
}
amendToDo(5, "bob");