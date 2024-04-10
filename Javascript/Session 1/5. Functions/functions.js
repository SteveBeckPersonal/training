function sum(a, b){

    let total = a+b;
    return total;
}

function subtract(a, b){
    return a-b;
}

function exampleFunction(sentence) {
    console.log(sentence);
}

// console.log(sum(1,2));
// console.log(subtract(3,1))
// console.log(subtract(1,3))
// exampleFunction("Hi")
// let total = sum(149, 172);

// let compoundTotal = sum(sum(1,2), sum(3,4));
// console.log(compoundTotal)

// let answer = sum('Hello', ' world')
// console.log(answer)


function getNthWord(sentence, wordNumber){
    const words = sentence.split(" ");
    console.log(words);
    return words[wordNumber-1];
}

console.log(getNthWord('Hello everyone this is a sentence',2));




