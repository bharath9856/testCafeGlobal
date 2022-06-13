import {  Selector } from "testcafe";
import prmsLoginPage from "../pageObjectModel/prmsLoginPage.js";





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
    .typeText(userName, "bharaths")
    .typeText(password, "India@123")
    .click(clickOnLogin)
    .expect(Welcome.textContent).contains('Welcome')
    .click(ClientMenu)
    .expect(ClientMenu.textContent).contains('Client')
    .click(Add)
    .typeText(clientName,"abcd")
    .typeText(address,'bangalore')
    .click(country)
    .click(countryOption.withText('Afghanistan'))
    .typeText(location,'bangalore')
    .click(status)
    .click(statusOption.withText('Active'))
    .click(save)
    .click(ok)
    .click(LogoutArrow)
    .click(Logout)

});