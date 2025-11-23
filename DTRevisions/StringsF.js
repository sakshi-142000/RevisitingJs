let name='sakshi';
let greeting= `Hello, ${name}!`;
console.log(greeting);

//Using single and double quotes

let singleQuoteString='Test Single Quote String';
let doubleQuoteString="Test Double Quote String";

console.log(singleQuoteString);
console.log(doubleQuoteString);

//now if you do multiline strings in quotes

// singleQuoteString='Line one
// line two'; //error

singleQuoteString='Line one \n line two'; 
console.log(singleQuoteString);

// Using backticks

let backtickString=`This is first line
this is second line
  this is third indented line`;

console.log(backtickString);