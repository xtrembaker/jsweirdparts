// What about Asynchronous callbacks ?

// Asynchronous :
// - More than one at a time

// The javascript engine itself is not the only one module working on the Browser (Rendering Engine / Http Request)
// Those module could work Asynchronous but never Javascript
// The javascript has hooks to use Rendering Engine or Http Request
// There is an Event Queue where "click" of "HTTP Request" catch are stored. 
// This queue is called ONLY when all the stack of Javascript is empty. Then Javascript check that queue, and process it one by one


function waitThreeSeconds(){
    var ms = 3000 + new Date().getTime();
    while(new Date() < ms){}
    console.log('finished function');
}

function clickHandler(){
    console.log('click event!');
}

document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log('Finished execution');


// Browser display first "finished function" then, finished execution
// When user "click" in the page, the browser display : "finished function", finished execution, click event !
// This is because while the user click, it's stacked in the Event Queue, but JS wait to finish reading the stack of executions context running before having a look at it