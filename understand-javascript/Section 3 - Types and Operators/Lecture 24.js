// - Conceptual Aside : Coercion

// Coercion :
// - Converting a value from one type to another

var a = 'hello' + 'world';
console.log(a);// Hello world

var a = 1 + '2';
console.log(a); // 12 - it's like both was 2 strings

// Javascript engine transform the Number into String

var a = 1, b = '2';
console.log(a+b);//12