let someBoolean = true;

//The variable someNumber only exists within the codeblock
if(someBoolean === true){
    console.log(someBoolean)
    let someNumber = 53;
    console.log(someNumber);
}

//calling the below code will result is an undefined variable
//console.log(someNumber);