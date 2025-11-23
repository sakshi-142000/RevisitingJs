//**typeof null is object**

let internationalNull= null;
console.log(`Value: ${internationalNull}`);

console.log(`type of null: ${typeof internationalNull}`);

// Backend Reason: The first version of JS stored type information as a 32-bit value. 
// The bit pattern for null was 000, which the engine mistakenly interpreted as an object type tag.

// type of NaN is number

/* a variable typically get NaN value when js engine
attempts to do mathematical operation or numeric conversion
that fails because operand is not a valid number

ex: string to number conversions
undefined to number conversions
*/ 

let testNum=Number("102");
console.log(testNum);//102
let resultsNaN= Number("Not a number string");
console.log(resultsNaN);//102

//if you do typeof NaN, it will give Number, weird but true

console.log(` type of Nan: ${typeof resultsNaN}`); //number

//why? because, NaN is a special numeric value defined by IEEE754 floating point standard

// NaN represent result of indeterminate or 
// non representable mathematic operation ( like 0/0, Number("string") etc)



