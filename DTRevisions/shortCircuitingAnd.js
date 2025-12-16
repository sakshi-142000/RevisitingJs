/*
If the first operand is Falsy: The engine stops and immediately returns the first Falsy operand, 

If all operands are Truthy: The engine returns the last Truthy operand.

Reasoning: && is commonly used to conditionally execute a function only if an object exists: user && user.save() 
(Prevents an error if user is null or undefined).
*/

let userName="Sakshi";
let permission=true; 

console.log(`Display username: ${permission && userName}`); //return userName, if permission were false, it would return false

permission=false;
console.log(`Display username: ${permission && userName}`); //return false