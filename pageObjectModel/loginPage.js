import { Selector, t } from "testcafe"




class LoginPage{
    constructor(){
        this.userName = Selector('#username');
        this.password = Selector('#password');
        this.clickOnLogin = Selector('button[type="submit"]');
    }

    async setUsername(userName){
        await t 
        .typeText(this.userName,userName);
    }
    async setPassword(pass){
        await t 
        .typeText(this.password,pass);
    }
    async LoginBTN(){
        await t 
        .click(this.clickOnLogin)
        .takeScreenshot();
    }
}
export default new LoginPage();
