//Boolean Conversions and Falsy Values

/*When converting to boolean, 
js engine checks if value is one of the six falsy values or not
if it is, it returns false, otherwise true
Falsy values are: undefined, null, NaN, 0, "", false
*/

// all of the below values returns false

console.log(`Empty string to Boolean: ${Boolean("")}`);
console.log(`Number 0 to Boolean: ${Boolean(0)}`);
console.log(`NaN to Boolean: ${Boolean(NaN)}`);
console.log(`Undefined to Boolean: ${Boolean(undefined)}`);
console.log(`Null to Boolean: ${Boolean(null)}`);
console.log(`false to Boolean: ${Boolean(false)}`);

let userEmail=""; //empty string or you can also not declare it(undefined) or keep it as null
if(userEmail){
    console.log(`Welcome ${userEmail}`);
}
else{
    //userEmail is currently False, null converted to False
    console.log("Please enter email");
}

