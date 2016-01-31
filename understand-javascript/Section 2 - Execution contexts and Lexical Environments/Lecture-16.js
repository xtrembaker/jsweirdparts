// Scope, ES6 (EcmaScript 2015), and let

// Scope : Is where a variable is available in your code
// And if it's truly the same variable or a new copy

// let can be used instead of var.

if(a > b){
    console.log(c); // Error !
    let c = true;
}

// You can't call a variable defined by "let" as long as you haven't set it.
// it's declared inside a block (curly braces - if / for / ...) it's only available inside that block. With var keyword, the var would be still available after ending the block