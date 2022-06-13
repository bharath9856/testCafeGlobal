import { Selector, t } from "testcafe"




class DashboardPage{
    constructor(){
        this.Welcome = Selector('p.username');
        this.ClientMenu = Selector("a[href='#/viewClient']");
        this.Add = Selector("button.btn.btn-success.text-center.mr-1.ng-star-inserted");
        this.clientName =Selector("#name");
        this.address = Selector('#address');
        this.country = Selector('#country');
        this.countryOption = this.country.find('option');
        this.status = Selector('#status');
        this.statusOption = this.status.find('option');
        this.location = Selector('#location');
        this.save = Selector('button[type="save"]');
        this.ok = Selector('button[type="submit"]');
    }

    async clickOnClientMenu(){
        await t 
        .click(this.ClientMenu);
    }
    async AddBtn(){
        await t 
        .click(this.Add);
    }
    async setClientName(text){
        await t 
        .typeText(this.clientName,text);
    }
    async setAddress(text){
        await t 
        .typeText(this.address,text);
    }
    async clickOnCountry(){
        await t 
        .click(this.country);
    }
    async selectCountryOption(txt){
        await t 
        .click(this.countryOption.withText(txt));
    }
    async setLocation(text){
        await t 
        .typeText(this.location,text);
    }
    async clickOnStatus(){
        await t 
        .click(this.status);
    }
    async selectStatus(txt){
        await t 
        .click(this.statusOption.withText(txt));
    }
    async clickOnSave(){
        await t 
        .click(this.save);
    }
    async clickOnOk(){
        await t 
        .click(this.ok);
    }

}
export default new DashboardPage();
