/*
comparisons between same data types is straightforward
confusion arises when we compare two operands with different data types
*/

/*
for the comparison operators >, < , >=, <=, ==, 
these operators first covert the operand into number or feasible data type and then compare 
*/

console.log("2" > 0) //t
console.log("02" > 0) //t

//comparing with null

console.log(null > 0); //false
console.log(null == 0); // equals to operator does not convert null to number, false
console.log(null >=0) //true
console.log(null<=0) //true

//comparison with undefined gives undefined. 

console.log(undefined == 0) //false
console.log(undefined >0 ) //false
console.log(undefined <0 ) //false
console.log(undefined >= 0 ) //false
console.log(undefined <=0 ) //false

//the strict === operator, strictly checks with datatypes 
console.log("2"===2); //false, not datatype conversion will take place