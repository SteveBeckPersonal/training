const names = ['Bongo','Jodi','Cameron','Angela','CJ','Steve','Collen']
const surnames = ['','','','','','',''];
const adv = [
    {
        "Name":"Stephen",
        "Surname":"Beck",
        "Age":32
    },
    {
        "Name":"Stephen",
        "Surname":"Beck",
        "Age":32
    }
];

console.log(names.length)



//declaration of variable
//rule for ending the loop
//instruction per iteration
for(let i = 0; i < 10; i++){

}


for(let i =0; i < names.length; i++){
    console.log(`${names[i]} ${surnames[i]}`)
}

names.forEach(name => {
    console.log(name);
});


for(let i =0; i< adv.length; i++){
    console.log(`${adv[i].Name} ${adv[i].Surname} ${adv[i].Age}`)
}