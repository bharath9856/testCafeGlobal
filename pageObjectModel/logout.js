import { Selector, t } from "testcafe"




class Logout{
    constructor(){
        this.LogoutArrow = Selector('#navbarDropdown');
        this.Logout = Selector('.dropdown-menu.show');
    }

    async clickLogoutArrow(){
        await t 
        .click(this.LogoutArrow);
    }
    async clickLogout(){
        await t 
        .click(this.Logout);
    }
}
export default new Logout();
