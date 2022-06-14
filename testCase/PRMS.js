import LoginPage from "../pageObjectModel/loginPage";
import Common from "../pageObjectModel/common";
import Logout from "../pageObjectModel/logout";
import DashboardPage from "../pageObjectModel/dashboardPage";

fixture `PRMS`
    .page `http://172.16.29.172:4200/#/login`;


test('Test1', async t => { 
    Common.windowMax();
    LoginPage.setUsername("bharaths");
    LoginPage.setPassword("India@123");
    LoginPage.LoginBTN();
    
    await t
    .expect(DashboardPage.Welcome.textContent).contains('Welcome');

    Logout.clickLogoutArrow();
    await t
    .wait(3000);
    
    Logout.clickLogout();

});

test('Test2', async t => {

    
    Common.windowMax();
    LoginPage.setUsername("bharaths");
    LoginPage.setPassword("India@123");
    LoginPage.LoginBTN();
    
    await t
    .expect(DashboardPage.Welcome.textContent).contains('Welcome')
    .takeScreenshot();
    
    DashboardPage.clickOnClientMenu();

    await t
    .expect(DashboardPage.ClientMenu.textContent).contains('Client');
    DashboardPage.AddBtn();
    await t
    .wait(1000);
    DashboardPage.setClientName("abcd");
    await t
    .wait(1000);
    DashboardPage.setAddress('bangalore');
    await t
    .wait(1000);
    DashboardPage.clickOnCountry();
    await t
    .wait(1000);
    DashboardPage.selectCountryOption('Afghanistan');
    await t
    .wait(1000);
    DashboardPage.setLocation('bangalore');
    await t
    .wait(1000);
    DashboardPage.clickOnStatus();
    await t
    .wait(1000);
    DashboardPage.selectStatus('Active');
    await t
    .wait(1000);
    DashboardPage.clickOnSave();
    await t
    .wait(1000);
    DashboardPage.clickOnOk();
    await t
    .wait(1000);
    Logout.clickLogoutArrow();
    await t
    .wait(1000);
    Logout.clickLogout();
});
