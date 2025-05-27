const score = 400 //typedef number
const balance = new Number (100) ; //using Number object
console.log(balance) //[Number: 100]


console.log(typeof(balance.toString()))
console.log(balance.toFixed(2)); //100.00 adding precision of 2, usedin e commerce application

let otherNumber=23.90887
console.log(otherNumber.toPrecision(4)); //2391, you only want precision for 4 digits

otherNumber=2345.890
console.log(otherNumber.toPrecision(2)); //2.3e3 

const hundreds=1000000;
console.log(hundreds.toLocaleString()); // us 1,000,000
console.log(hundreds.toLocaleString('en-IN')); //in 

