/*Summary
Primitive (7types): 
>>call by value, everytime you access them, they will be copied 
String, Number, Boolean, null(empty), undefined(variable is declared by memory is not initiated), Symbol(uniqueness), BigInt(for scientific and big values)

NonPrimitive (Reference types):

>>call by reference, you can directly use memory reference of these data types

Array
Objects
Functions

based on how data is stored in the memory and how is is accessed from the memory

Dynamically type or statically typed language
(Js is dynamically types, you do not have to define the data type for variable declarations)

Variables types are determined at runtime


*/

//Symbol data types

var id= Symbol("1234")//this id will be unique
var anotherId=Symbol("1234") //this is also same 

console.log(id===anotherId) //this will return false because values return by both of these symbols are different, generally used in frameworks. 


//bigInt
//
var bigNumber=9999456788903899088n;
console.log(typeof bigNumber); //bigint

//reference non primitive types, arrays, objects, functions

const names=["sakshi", "shreya", "pragya"]
console.log(typeof names); //object

let myobj= {
    name: "Sakshi",
    age:25,
    hobbies: ["coding", "sleeping"]
}

console.log(typeof myobj) //object

let myFunc=function(){
    console.log("function")
}

console.log(typeof(myFunc)) //function




