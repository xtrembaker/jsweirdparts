// - Objects and the Dot

//An Object can reference to
// - Primitive "property"
// - Object "property"
// - Function "method"

var person = new Object();// not the best way to create an object, will see later

person['firstname'] = "Tony";// "computed member access" operator
person['lastname'] = 'Alicea';

var firstNameProperty = 'firstname';

console.log(person);
console.log(person[firstNameProperty]);

console.log(person.firstname);//member access
console.log(person.lastname);

person.address = new Object();
person.address.street = "111 main st.";
person.address.city = "New York";
person.address.state = "NY";


console.log(person.address.street);
console.log(person.address.city);
console.log(person['address']['state']);

// Always recommend to use the Dot operator, except you really need programatically access the property