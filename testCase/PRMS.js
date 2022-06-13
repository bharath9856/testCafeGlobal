
import prmsObjects from "../pageObjectModel/prmsObjects";


fixture `PRMS`
    .page `http://172.16.29.172:4200/#/login`;
    

test('Test1', async t => {
    await t
    .maximizeWindow()
    .typeText(prmsObjects.userName, "bharaths")
    .typeText(prmsObjects.password, "India@123")
    .click(prmsObjects.clickOnLogin)
    .expect(prmsObjects.Welcome.textContent).contains('Welcome')
    .click(prmsObjects.LogoutArrow)
    .click(prmsObjects.Logout)

});

test('Test2', async t => {
    await t
    .maximizeWindow()
    .typeText(prmsObjects.userName, "bharaths")
    .typeText(prmsObjects.password, "India@123")
    .click(prmsObjects.clickOnLogin)
    .expect(prmsObjects.Welcome.textContent).contains('Welcome')
    .click(prmsObjects.ClientMenu)
    .expect(prmsObjects.ClientMenu.textContent).contains('Client')
    .click(prmsObjects.Add)
    .typeText(prmsObjects.clientName,"abcd")
    .typeText(prmsObjects.address,'bangalore')
    .click(prmsObjects.country)
    .click(prmsObjects.countryOption.withText('Afghanistan'))
    .typeText(prmsObjects.location,'bangalore')
    .click(prmsObjects.status)
    .click(prmsObjects.statusOption.withText('Active'))
    .click(prmsObjects.save)
    .click(prmsObjects.ok)
    .click(prmsObjects.LogoutArrow)
    .click(prmsObjects.Logout)

});