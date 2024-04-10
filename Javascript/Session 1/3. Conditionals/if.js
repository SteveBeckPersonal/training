let number1 = 7;
let number2 = 1;

// === is our equals comparitor
if(number1 === number2){
    console.log('Equals!')
}

//less than
if(number1 < number2){
    console.log('Less than!')
}

//greater than
if(number1 > number2){
    console.log('Greater than!')
}

//less than or equal to
if(number1 <= number2){
    console.log('Less than or equal to')
}

//greater than or equal to
if(number1 >= number2){
    console.log('Greater than or equal to')
}

// && is our AND comparitor - BOTH must be true to resolve as true
if((number1 === 7) && (number1 !== number2)){
    console.log('BOTH!')
}

// || is our OR comparitor - ATLEAST ONE (inclusive use of OR) must be true to resolve as true
if((number1 === 7) || (number1 === number2)){
    console.log('EITHER!')
}
