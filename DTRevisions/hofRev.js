//Passing a function as Argument
function add(a, b, callBackF){
    let result=a+b;
    callBackF(result);
}

/*
add(10, 20, function(res){
    console.log(res);
});

*/

// using arrow functions
add(10, 20, (result)=>{
    console.log(result);
});


//HOF: function that returns another function as callback

function addWithReturn(a, b){
    let result=a+b;
    return ()=>{
        console.log(result);
    };
}


function addWithReturn2(a, b){
    let result=a+b;
    return function print(){
        console.log(result);
    };
}

let resultFunc= addWithReturn(10, 20);
resultFunc();

let resultFunc2= addWithReturn2(30, 40);
resultFunc2();


const userDatabase = [
    {username: "alice", password: "123", role: "admin"},
    {username: "john", password: "454", role: "user"},
];

// use map() to create new array where each object include new property
// userId: username prefixed with ID-

const publicProfiles=userDatabase.map(user=>({
    userId: `ID-${user.username}`,
    role: user.role

}) //basically says that for each user in userDatabase, create a new array element of type object with the userID and role property
); 

console.log(publicProfiles);

