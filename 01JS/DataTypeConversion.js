//Conversions / operations

let score="33"
console.log(typeof score); //string
let valueInNumber=Number(score);
console.log(typeof valueInNumber); //number

//let say you are converting some string into number
let score2="33abv"
let valueInNumber2=Number(score2)
console.log(valueInNumber2) //this is NaN
console.log(typeof valueInNumber2) // but typeof is giving number 


//Point is to always check the value passed with NaN before going for typeof

//lets check other example of converting null to number
let score3=null
console.log(score3)
console.log(typeof score3) // typeof null is object
let valueInNumber3=Number(score3)
console.log(valueInNumber3) //this gets converted to 0
console.log(typeof valueInNumber3) // now a number

//Similarly when you convert undefined to number, it gives NaN
let score4
console.log(score4) //undefined
console.log(typeof score4) //undefined
let valueInNumber4=Number(score4)
console.log(valueInNumber4) //NaN
console.log(typeof valueInNumber4) //Number




/*Notes:
"33" -> 33 valid string to number give number
"sakshi" -> NaN if you convert any invalid string to number it will give Nan
"null" -> 0 
undefined -> NaN typeof NaN is Number itself
true -> 1
false -> 0
"" -> false 
"someNonEmptyString"->true
*/

