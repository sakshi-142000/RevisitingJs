//1. null vs undefined 
console.log(`null==undefined is true: ${null==undefined}`);
console.log(`null===undefined is false: ${null===undefined}`); //different data types

console.log(`null+5 : ${null+5}`); //5 because null is coerced to 0 in numeric operations

console.log(`undefined+5 : ${undefined+5}`); //NaN because undefined is coerced to NaN in numeric operations

// 2. String vs Number
console.log(`"253"==253, type coercion will happen: ${"253"==253}`);
console.log(`"253"===253, type coercion will NOT happen: ${"253"===253}`);

// 3. Similar with Boolean and Number

console.log(`true==1: ${true==1}`);//true
console.log(`0=="": ${0==""}`); //true , "" will convert to 0

//5. Dangerous NaN

let numNaN=Number("some string");
console.log(`NaN==numNaN: ${NaN==numNaN}`); //false
console.log(`NaN==NaN: ${numNaN==numNaN}`); //false


