//resolving confusion between NaN, null and undefined (when you declare a var in js but do not initialise it)
// when converting to number type


//1. string to number
let stringvar="sakshi14";
let stringnum=Number(stringvar); //NaN, sakshi14 is not a number
console.log(stringnum);

// this does not happen when to convert "14" to number

let Stringvar2="142000";
console.log(`converted number is: ${Number(Stringvar2)}`); 

// 2. null to Number
let nullVar=null;
console.log(`Number value for nullVar: ${Number(nullVar)}`);//0

//typeof null is object
console.log(`typeof nullVar: ${typeof nullVar}`);

// 3. undefined to Number: gives NaN
let undefinedVar; //declared only not initialised
console.log(`Number value for undefinedVar: ${Number(undefinedVar)}`);//NaN
