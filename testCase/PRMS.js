
import prmsLoginPage from "../pageObjectModel/prmsLoginPage";





fixture `PRMS`
    .page `http://172.16.29.172:4200/#/login`;
    

test('Test1', async t => {
    await t
    .maximizeWindow()
    .typeText(prmsLoginPage.userName, "bharaths")
    .typeText(prmsLoginPage.password, "India@123")
    .click(prmsLoginPage.clickOnLogin)
    .expect(prmsLoginPage.Welcome.textContent).contains('Welcome')
    .click(prmsLoginPage.LogoutArrow)
    .click(prmsLoginPage.Logout)

});

test('Test2', async t => {
    await t
    .maximizeWindow()
    .typeText(prmsLoginPage.userName, "bharaths")
    .typeText(prmsLoginPage.password, "India@123")
    .click(prmsLoginPage.clickOnLogin)
    .expect(prmsLoginPage.Welcome.textContent).contains('Welcome')
    .click(prmsLoginPage.ClientMenu)
    .expect(prmsLoginPage.ClientMenu.textContent).contains('Client')
    .click(prmsLoginPage.Add)
    .typeText(prmsLoginPage.clientName,"abcd")
    .typeText(prmsLoginPage.address,'bangalore')
    .click(prmsLoginPage.country)
    .click(prmsLoginPage.countryOption.withText('Afghanistan'))
    .typeText(prmsLoginPage.location,'bangalore')
    .click(prmsLoginPage.status)
    .click(prmsLoginPage.statusOption.withText('Active'))
    .click(prmsLoginPage.save)
    .click(prmsLoginPage.ok)
    .click(prmsLoginPage.LogoutArrow)
    .click(prmsLoginPage.Logout)

});