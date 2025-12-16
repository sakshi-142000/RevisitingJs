// falsy values: 0 (from number), false (from boolean), ""(empty string from String), null, NaN, undefined
let userCount=0; //falsy value

if(userCount){
    //if userCount is not a falsy value
    console.log(`we have ${userCount} users`);
}
else {
    //this will be executed in our case
    console.log("no users found!");
}

let userName="0"; //confusing but not a falsy value, no empty string
if(userName){
    console.log(`user name is set to ${userName}`);
}