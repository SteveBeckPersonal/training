class SauceDemoLoginPage{

    login(credential){
        this.enterUsername(credential.username);
        this.enterPassword(credential.password);
        this.clickSubmit();
        this.validateLoginSuccess();
    }

    enterUsername(username){

    }
    
    enterPassword(password){
    
    }
    
    clickSubmit(){
    
    }
    
    validateLoginSuccess(){
    
    }
    
}


const loginPage = new SauceDemoLoginPage();

loginPage.login({username:'JSON', password:'IsBeingUsed'});