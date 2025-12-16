//falsy values are used in OR operations to return a default value

/*
If the first operand is Truthy: The engine stops and immediately returns the first Truthy operand, 
(as the overall result must be Truthy.)

If all operands are Falsy: The engine returns the last operand.
*/

// example

let responseName=""; //falsy value, 
let defaultName="Guest"; //our default value 


// if all values before the last are falsy, return the default last

let finalName=responseName || defaultName;

console.log(`finalName is: ${finalName}`); //Guest


// another example
let responseCount=5; //truthy value
let finalResponse= responseCount || 100; //100 being the default here
console.log(`final response is: ${finalResponse}`);


// example where all the operands are falsy

console.log(`all falsy operands returns: ${"" || false || 0}`);//last operand 0 
