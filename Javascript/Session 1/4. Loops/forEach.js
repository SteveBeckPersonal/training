const names = ['Bongo','Jodi','Cameron','Angela','CJ','Anderson','aCollen']

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

for(let name of names){
    console.log(name);
}


names.forEach(name => {
    if(name[0].toUpperCase() === 'A'){
        console.log(name);
    }
    
});

adv.forEach(x => {
    console.log(`${x.Name} ${x.Surname} ${x.Age}`)
})