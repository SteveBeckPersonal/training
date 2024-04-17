import SauceDemoLoginPage from "../Pages/LoginPage.js";
import Animal from '../../Session 1/6. Classes/animal.js'

export default class Application{
    constructor(){
        this.loginPage = new SauceDemoLoginPage();
        this.animalPage = new Animal();
    }
}