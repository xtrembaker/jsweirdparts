// Function invocation and the Execution Stack

// Invocation :
// - Running a Function (calling a function). We "invoke" the function by using ()

function b(){// does nothing
    var d;
}

function a(){
    b();// Invoke b()
    var c;
}

a();//Invoke a()
var d;
// At first, the Global Execution Context is created + code is executed)
// When it hits a(); A new Execution context is created and execute, on top of the "execution stack". The var "c" is defined into that context
// Each time a new function is invocated, a new execution context is created
// When it hits b(); A new Execution context is created and execute, on top of the "execution stack". The var "d" is defined into that context
// When b() finishes, it's pop off the stack and continue running a();
// When a() finished, it's pop off the stack and continue running the global execution context