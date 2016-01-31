// Functions, Context and Variables Environments

// Variables Environments :
// - Where the variables live 
// - And how they relate to each other in memory

function b(){// does nothing
    var myVar;
    console.log(myVar);//undefined
}

function a(){
    var myVar = 2;
    console.log(myVar);//2
    b();
}

var myVar = 1;
console.log(myVar);//1;
a();
console.log(myVar); //1;

// At first the Global Execution context is created. And the "myVar" is put in memory into that execution context (myVar equal 1)
// Then it hits invocation of a(); The myVar inside is set in memory into that execution context (myVar equal 2)
// Then it hits invocation of b(); The myVar inside is set in memory into that execution context (myVar is undefined)