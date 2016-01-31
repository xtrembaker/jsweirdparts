// - Comparison operators

console.log(1 < 2 < 3);// true

console.log(3 < 2 < 1);// true. 

//Less than has a left-to-right associativity, so this how the engine translate :
// 3 < 2 is false
// false < 1 is true because false is coerced to 0

Number("3"); // 3
Number(false); // 0
Number(true); //1
Number(undefined);// NaN (Not a Number)
Number(null);// 0

3 == 3;//true
"3" == 3;// true, it coerced the type
false == 0;//true, it coerced the type

var a = false;
a == 0;// true, it coerced the type

null == 0;// false, no coercion here
null < 1; //true

"" == 0;//true, it coerced the type
"" == false;//true, it coerced the type

3 === 3;//true Strict equality (type and value)
"3" === "3"; //true
"3" === 3;// false

var a = 0;
var b = false;

if(a === b){
    console.log('They are equal !');
}else{
    console.log('Nope, not equal');
}