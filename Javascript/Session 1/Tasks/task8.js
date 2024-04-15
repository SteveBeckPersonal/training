let numbers = [1,272,5,8,4,32,99];
numbers.push(...numbers);
numbers.push(...numbers);
numbers.push(...numbers);

console.log(numbers.length);

//find max
//272
// const max = Math.max(...numbers);
// console.log(`Max value: ${max}`);

let highestValue =numbers[0];
for(let number of numbers){
    if(number > highestValue){
        highestValue = number;
    }
}

console.log(`Max value: ${highestValue}`);

//find min
//1 
//console.log(Math.min(...numbers))

let lowestValue =numbers[0];
for(let number of numbers){
    if(number < lowestValue){
        lowestValue = number;
    }
}

console.log(`Min value: ${lowestValue}`);