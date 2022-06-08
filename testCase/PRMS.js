import {  Selector } from "testcafe";


const userName = Selector('#username')
const password = Selector('#password')
const clickOnLogin = Selector('button[type="submit"]')
const Welcome = Selector('p.username')
const verifyDashboard = Selector('.head')
const LogoutArrow = Selector('#navbarDropdown')
const Logout = Selector('.dropdown-menu.show')
const ClientMenu = Selector("a[href='#/viewClient']")
const AdminUserName = Selector("#searchSystemUser_userName")
const searchBtn = Selector("#searchBtn")
const resetBtn = Selector("#resetBtn")

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
    .click(LogoutArrow)
    .click(Logout)

});