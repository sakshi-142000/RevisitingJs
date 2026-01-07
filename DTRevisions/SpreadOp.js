const original=[1, 2, 3];
const ref=original; //both point to same memory location in stack

const shallowCopy=[...original];
console.log(shallowCopy);
original.push(4);
console.log(original);
console.log(shallowCopy); //remains unchanged


//Use Case: Merging Arrays
const fruits = ['apple', 'banana'];
const veggies=['carrot', 'potato'];

const combined=[...fruits, ...veggies]; 

console.log(combined);


// insert elements in between

let nums1=[1, 2, 4, 5];
let updatedNums=[1, 2, 3, ...nums1.slice(2)];

console.log(`updatedNums: ${updatedNums}`);

//Use Case: Spread with Objects
/*
widely used in frameworks like React 
to update state without mutating the original object.
*/

const person={name: 'Sakshi', 
    age: 25,
    city: "Hyderabad"
};

//create new object, copy user properties from person object

const updatedUser={
    ...person,
    city: "Bhopal", //updated property
    profession: "SDE" //added new property
}

console.log(updatedUser);


//Spread in Function Calls
/*
If you have an array of values 
but a function expects individual arguments, 
the spread operator "unpacks" the array for you.
*/

function add(a, b, c){
    // console.log(`${a} , ${b}, ${c}`);
    return a+b+c; 
}

// let nums=[1, 2];
let nums=[1, 2, 3, 4];
console.log(add(...nums)); //give only the first 3 numbers of nums

//Spread with Strings

let str="spreadWithStrings";
let chars=[...str];

console.log(`chars: ${chars}`);







