//using x before declaration

console.log(`variable x before declaration ${x}`); //undefined (Hoisted)
var x=10;

// scoping

var globalVar=1;
let globalLet=2;

if(true){
    //scope
    console.log(`both glbalVar and globalLet are accessible: ${globalVar} , ${globalLet}`);
    let blockScopeLet=3;
    var blockScopeVar=4;
    console.log(`blockScopeLet: ${blockScopeLet} , blockScopeVar: ${blockScopeVar}`);

}

//console.log(`outside block=>blockScopeLet: ${blockScopeLet} `); //error
console.log(`outside block=>blockScopeVar: ${blockScopeVar}`); //accessible
