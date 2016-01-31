// The Scope Chain

function b(){
    console.log(myVar);// 1 - coming from the global execution context
}

function a(){
    var myVar = 2;// this var is defined in the execution context of a()
    b();
}

var myVar = 1;
a();

// When b is invocated, it sets all the variable found into that context, but myVar is not set.
// in case of b() it's "outer environment" is the "global execution context" thanks to its lexical environment
// b() lexically sits (is defined / written) in the "global execution", so myVar is found in this lexical environment (global). It's "attached" to the Global execution context
// a() also have "Global execution context" as "outer environment", but myVar is redefined
// This chain of reference of outer environment will search the myVar variable all the way down until the Global Execution is reached


function a(){
    function b(){
        console.log(myVar);
    }
    
    var myVar = 2;
    b();//2
}

var myVar = 1;
a();//
b();

// In this example, b() has been moved and sits in a different lexical env (its outer reference is a()).
// Si myVar in b() would be 2.
// Another way to think about "outer reference" is to ask "Who created me" ? In case of b(), it was created during the execution context of a();