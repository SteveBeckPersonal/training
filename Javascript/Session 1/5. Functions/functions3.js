const sum = (a, b) => {
    return a+b;
}

console.log(sum(1,2))


console.log(sum(1,2));



let answer = sum('Hello', ' world')
console.log(answer)


const getNthWord = (sentence, index) => {
    const words = sentence.split(' ');
    return words[index];
}

console.log(getNthWord('Hello everyone this is a sentence',2));