for(let i = 1; i<= 100; i++){
    
    let output ='';

    if(i % 3 === 0){
        output+='Fizz';
    }
    
    if(i % 5 === 0){
        output+= 'Buzz';
    }

    if(output === ''){
        output = i;
    }

    console.log(output);
    
    // if((i % 5 === 0) && (i % 3 === 0) ){
    //     console.log(`FizzBuzz`)
    // }
    // else if(i % 3 === 0){
    //     console.log(`Fizz`)
    // }
    // else if(i % 5 === 0){
    //     console.log(`Buzz`)
    // }
    // else{
    //     console.log(i);
    // }
}