/*

Stack memory & heap memory in js
Stack memory: 
1. primitivetypes
2. whenever we use stack memory, we do not use references, rather we get a copy of the variable
Heap memory: 
1. Non primitive, reference types
2. We get reference of the memory location, so changes will be directly made on the orginal value 

In simple words:
when the primitive type variables are stored in stack 

when you do 
let var1 = "something"
let var2=var1 // when you access var1, value of var1 is passed rather then reference

so var1 and var2 both have different addresses in the memory but currently have same value
var2="new something"
since both var1 and var2 have different references, var1 still has something
*/


/*
Non Primitive reference types use heap memory so when you access them you are directly using the orginial memory location

eg

var myarr1=["something", "something2"]

var myarr2=myarr1; //myarr2 is also pointing to the same location as of myarr1 here 

so if you do, myarr2[1]="something changed" then myarr1 will also get changed

*/


let var1="something"
let var2=var1

var2="something new"

console.log(var1) //var1 is still the same
console.log(var2)

let obj1={
    user: "sakshi@z.com",
    number: 12345
}

let obj2=obj1 //both obj1 and obj2 are using the same memory location
obj2.number= 0


console.log(obj1)
console.log(obj2) //both changed obv




