// The Execution Context - Creation and Hoisting
// 
b();// Works thanks to Hoisting
console.log(a);// "undefined" because "a" is defined into memory, but has no value yet
console.log(c); // Uncaught ReferenceError : c is not defined (not set in memory, do not exists in the code)

if(a === undefined){// use special keyword (special value) to check if it's true
    console.log('a is undefined!');
}else{
    console.log('a is defined!');
}

var a = 'Hello World';

a = undefined;// Never DO THAT! Use null instead if necesserary. It's better to let "undefined" mean I've never set "a" a value

function b(){
    console.log('Called b');
}

