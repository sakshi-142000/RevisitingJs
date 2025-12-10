//ToDo List

let myTodoList=[];
myTodoList.push("get groceries");
myTodoList.push("clean the house");
console.log(myTodoList.push("pay bills"));//also returns the new length
console.log(myTodoList);

console.log(myTodoList.pop()); //returns and removes the last element of the array

console.log(myTodoList.shift()); //returns and removes the first element, kinda shifting the array

myTodoList.unshift("workout");//adds element to the starting of array
console.log(myTodoList);


// the splice method: for removing and replaing elements 

// * Syntax: array.splice(startIndex, deleteCount, item1, item2, ...)

myTodoList.splice(1, 2, "Study", "Study block2");
console.log(myTodoList); //from starting index 1, replace 2 elements with the values given in the arguments

// the slice method: for copying elements to a new array

// * Syntax: array.slice(startIndex, endIndex)

let newTodoList= myTodoList.slice(0,1);
console.log(newTodoList);


