import {  Selector } from "testcafe";


const userName = Selector('#username')
const password = Selector('#password')
const clickOnLogin = Selector('button[type="submit"]')
const Welcome = Selector('p.username')
const LogoutArrow = Selector('#navbarDropdown')
const Logout = Selector('.dropdown-menu.show')
const ClientMenu = Selector("a[href='#/viewClient']")
const Add = Selector("button.btn.btn-success.text-center.mr-1.ng-star-inserted")
const clientName =Selector("#name")
const address = Selector('#address')
const country = Selector('#country')
const countryOption = country.find('option')
const status = Selector('#country')
const statusOption = status.find('option')
const location = Selector('#location')
const save = Selector('button[type="save"]')
const ok = Selector('button[type="submit"]')


fixture `PRMS`
    .page `http://172.16.29.172:4200/#/login`;
    

test('Test1', async t => {
    await t
    .maximizeWindow()
    .typeText(userName, "bharaths")
    .typeText(password, "India@123")
    .click(clickOnLogin)
    .expect(Welcome.textContent).contains('Welcome')
    .click(LogoutArrow)
    .click(Logout)

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
    .click(countryOption.withText('Afghanistan '))
    .typeText(location,'bangalore')
    .click(statusOption.withText('Active'))
    .click(save)
    .click(ok)
    .click(LogoutArrow)
    .click(Logout)

});