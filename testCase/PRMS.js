import LoginPage from "../pageObjectModel/loginPage";
import common from "../pageObjectModel/common";
// import Logout from "../pageObjectModel/logout";
// import DashboardPage from "../pageObjectModel/dashboardPage";

fixture `PRMS`
    .page `http://172.16.29.172:4200/#/login`
    
    

test('Test1', async t => { 
    common.maximumWindow();
    LoginPage.setUsername("bharaths");
    LoginPage.setPassword("India@123");
    LoginPage.LoginBTN();
    common.WaitSec(5000);
    
    // await t
    // .expect(DashboardPage.Welcome.textContent).contains('Welcome');

    // Logout.clickLogoutArrow();
    // common.wait(1000);
    // Logout.clickLogout();

});

test('Test2', async t => {

    
    // common.maximumWindow();
    // LoginPage.setUsername("bharaths");
    // LoginPage.setPassword("India@123");
    // LoginPage.LoginBTN();
    
    // await t
    // .expect(DashboardPage.Welcome.textContent).contains('Welcome');
    
    // common.wait(1000);
    // DashboardPage.clickOnClientMenu();
    
    // await t
    // .expect(DashboardPage.ClientMenu.textContent).contains('Client');
    
    // common.wait(1000);
    // DashboardPage.AddBtn();
    // DashboardPage.setClientName("abcd");
    // DashboardPage.setAddress('bangalore');
    // DashboardPage.clickOnCountry();
    // DashboardPage.selectCountryOption('Afghanistan');
    // DashboardPage.setLocation('bangalore');
    // DashboardPage.clickOnStatus();
    // DashboardPage.selectStatus('Active');
    // DashboardPage.clickOnSave();
    // DashboardPage.clickOnOk();
    // Logout.clickLogoutArrow();
    // common.wait(1000);
    // Logout.clickLogout();

});