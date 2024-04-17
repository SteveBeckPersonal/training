class Credential{
    constructor(username, password){
        this.username = username;
        this.password = password;
    }
}

class Address{
    constructor(street, city, province, postalcode){
        this.street = street;
        this.city = city;
        this.province = province;
        this.postalcode = postalcode;
    }
}

class LoginPage{
    
    constructor(){

    }

    login(credential){
        console.log(`Enters the username - ${credential.username}`);
        console.log(`Enters the password - ${credential.password}`)
    }

    captureAddressDetails(address){
    }
}

const encapsulatedData = {username:'JSON', password:'IsBeingUsed'};

//Given
const credential = require('./credential.json');
const loginPage = new LoginPage();

//When
loginPage.login(credential);

//Then