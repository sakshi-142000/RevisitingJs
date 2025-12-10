let myArray1=new Array(); //this creates sparse array, slow//another way of declaring arrays
let myArray2= new Array(1, 2, "element3"); //also valid

// console.log(myArray1);
// console.log(myArray2);

let productsWithoutTax= new Array(25, 625, 800);
//transforming every element in the array
let productsWithTax=productsWithoutTax.map(product=>product*1.1); // returns a new array
console.log(productsWithoutTax);
console.log(productsWithTax);

//filter your arrays

let filteredProduts=productsWithoutTax.filter(product=>product > 600);
console.log(filteredProduts);


let myArrayNumbers=new Array(25, 625, 800, 900, 1103, 4, 327);
console.log(myArrayNumbers.slice(0, 5));
console.log(myArrayNumbers.slice(-1, 5));//empty array
console.log(myArrayNumbers.splice(2, 0, 450));//modifies the original array and returns the removed values
console.log(myArrayNumbers);

let splicedValue=myArrayNumbers.splice(3, 1); //removing the value at third index
console.log(splicedValue); //800
console.log(myArrayNumbers);

