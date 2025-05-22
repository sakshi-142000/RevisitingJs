const name="someName"

const repoCount=50

//concatenation
// old way of concatention in js
console.log(name+ " "+ repoCount);

// Latest syntax is to use backticks in String concatenation 
// aka string interpolation

//you can also use methods and a lot of things on the go
console.log(`hello, name is ${name}, repo count is ${repoCount}` )
const gameName= new String('poodle doodle')
console.log(gameName[3]); //d
/*
when you instantiate string using object, 

at the backend, it has object structure with keys as the index 
and chars as the pair


you also get a lot of methods with the String object

*/

console.log(gameName.__proto__); //{}

console.log(gameName.length); //length property

//methods available with String
console.log(gameName.toLowerCase())
console.log(gameName.toUpperCase())
console.log(gameName.charAt(5))
console.log(gameName.indexOf('t')) // -1 if not found

const newString= gameName.substring(0, gameName.indexOf('d'))
console.log(newString)

const newAnotherString= gameName.slice(0, 4)

console.log(newAnotherString)

const newAnotherString2= gameName.slice(-2, gameName.length); //it also takes negative indices
console.log(newAnotherString2)


//you can not pass negative indices in substring function

const str1="   sakshi     "
console.log(str1.trim()); //trim removes spaces from the strig
//please note that trim only works for whitespaces and line terminators 
// we also have trimStart() and trimEng()

const url="https://sakshi.com//sakshi%20sharms";
console.log(`url: ${url.replace('%20', '-')}`); //the string you want to replace with the replacement string

//split function

console.log(url.split('/')); //[ 'https:', '', 'sakshi.com', '', 'sakshi%20sharms' ]