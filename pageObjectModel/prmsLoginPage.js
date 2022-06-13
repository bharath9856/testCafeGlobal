import { Selector, t } from "testcafe"




class LoginPage{
    constructor(){
        this.userName = Selector('#username');
        this.password = Selector('#password');
        this.clickOnLogin = Selector('button[type="submit"]');
        this.Welcome = Selector('p.username');
        this.LogoutArrow = Selector('#navbarDropdown');
        this.Logout = Selector('.dropdown-menu.show');
        this.ClientMenu = Selector("a[href='#/viewClient']");
        this.Add = Selector("button.btn.btn-success.text-center.mr-1.ng-star-inserted");
        this.clientName =Selector("#name");
        this.address = Selector('#address');
        this.country = Selector('#country');
        this.countryOption = country.find('option');
        this.status = Selector('#status');
        this.statusOption = this.status.find('option');
        this.location = Selector('#location');
        this.save = Selector('button[type="save"]');
        this.ok = Selector('button[type="submit"]');


    }
}
export default new LoginPage();
