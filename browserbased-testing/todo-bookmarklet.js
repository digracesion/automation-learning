//bookmarklet to create 100 to-dos using setTimeOut
javascript:(function(){
    for(x=1; x<=100; x++){
        setTimeout(function(name){
            document.querySelector("input.new-todo").value=name;
            document.querySelector("input.new-todo").dispatchEvent(new Event("change",{"bubbles": true}));
        }, x*100, "todo " + x);
    }
})()

//bookmarklet to create to-dos given a maximum number through user input
javascript:(function(){
    max = prompt("how many?");
    if(max){
        for(x=1; x<=100; x++){
            setTimeout(function(name){
                document.querySelector("input.new-todo").value=name;
                document.querySelector("input.new-todo").dispatchEvent(new Event("change",{"bubbles": true}));
            }, x*100, "todo " + x);
        }
    }
})()