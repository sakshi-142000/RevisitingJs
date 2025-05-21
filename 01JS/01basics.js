"use strict"; //using the new js
// console.log("sakshi");

// discussing js datatype today

/*we can not use the alert statement in nodejs runtime js, 

this is a browser specific function, browser used to provide it using the "window" object
In node.js, we do not have DOM, or window object so alert does not exist. 
*/

//alert("hello"); we have a different syntax available for alert in node

// semicolon is not required in js, howevever readability is required

//original docs: ECMA Script: https://tc39.es/ecma262/
// other one is MDN (user-friendly)

let name="sakshi"; //string, can be single or double quote
let age=18; //2^53 something range of number


/*

Datatypes:
Primitive:
number, 
bigint
string
boolean
null: Stand alone value (later discussion) (is empty no undefined)
undefined: when you declare a value, js gives it undefined default value, i,e value is not assigned
symbol: for finding uniqueness in the component

Non primitive
Object (imp)
*/

//the typeof operator, you can declare it using three ways
console.log(typeof(name));
console.log(typeof name);
console.log(typeof "sakshi");

console.log(typeof null); //gives an object, null is an object
console.log(typeof undefined); //gives undefined






