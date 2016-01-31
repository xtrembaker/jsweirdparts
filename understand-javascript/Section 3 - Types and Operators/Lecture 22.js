
// - Operator Precedence and associativity


// Operator precedence:
// - Which operator function gets called first
// - Functions are called in order of precedence (HIGHER precedence wins)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// Associativity :
// - What order operator functions get called in : left-to-right or right-to-left
// - When functions have the same PRECEDENCE

var a = 3 + 4 * 5;
console.log(a);// 23

// Multiplication has a precedence of 14
// Addition has a precedence of 13
// so 3 + (4 * 5) = 23

var a = 2, b = 3, c = 4;

a = b = c;

console.log(a);//4
console.log(b);//4
console.log(c);//4

// the assignement (=) operator has a right-to-left associativity

var a = (3 + 4) * 5;
console.log(a);// 35

// parenthesis operator has a precedence of 19