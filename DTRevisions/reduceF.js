//Sum of Array(Classic Use Case)

let nums=[1, 2, 3, 4, 5];

let sum=nums.reduce((acc, currElement)=>{
    return acc+currElement; //reduce expects return of acc 
}, 0);


console.log(sum);


//Use case2: Finding Maximum
let max=nums.reduce((acc, currElement)=>{
    return (currElement>acc ? currElement: acc);
});

console.log(max);

//Use case3: Flatten an array
let arr=[[1,2] , [3, 4], [5, 6, 7]];
let flatArray= arr.reduce((acc,curr)=>{
    return acc.concat(curr);
}, []);

console.log(flatArray);

//Use case4: Count Frequency
let fruits=["apple", "banana", "apple", "orange", "banana"]; 
// count frequency of each fruit
let fruitFreq=fruits.reduce((acc, currElement)=>{
    acc[currElement]= (acc[currElement]||0) + 1;
    return acc;
}, {}); //creating an object with key as fruit and value as freq

console.log(fruitFreq);

//Use case5: Group objects by property

let people=[   
    {name: "Alice", age: 21},
    {name: "Bob", age: 25},
    {name: "Charlie", age: 21},
    {name: "David", age: 25},
];

//group these people based on their age

let ageGroups=people.reduce((acc, user)=>{
    let key=user.age;
    //create array for each key, in that array you will push users
    if(!acc[key]) acc[key]=[]; 
    acc[key].push(user);
    return acc;
}, {}); //accumulator initialised with empty object that we will create, key=> age, value=> user object

console.log(ageGroups); 

/*
{
  '21': [ { name: 'Alice', age: 21 }, { name: 'Charlie', age: 21 } ],
  '25': [ { name: 'Bob', age: 25 }, { name: 'David', age: 25 } ]
}
*/





/*
reduce() is a higher-order function that:

Reduces an array into a single value
(single number, object, array, string, etc.)

Syntax:
array.reduce((accumulator, currentValue, index, array) => {
    // return updated accumulator
}, initialValue);


accumulator: Stores the result so far
currentValue: Current array element
index: Index of current element (optional)
array: Original array (optional)
initialValue: Starting value of accumulator
*/



