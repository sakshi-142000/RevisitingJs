//use of isNaN() post conversion when typeof is misleading

let testValue="99bottles";

let converted= Number(testValue);

if(isNaN(converted)){
    console.log(`Error: ${testValue} converted to NaN`);
}
else {
    console.log("Successfully Converted");
}
