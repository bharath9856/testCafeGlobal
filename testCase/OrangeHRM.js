import {  Selector } from "testcafe";


const userName = Selector('#txtUsername')
const password = Selector('#txtPassword')
const clickOnLogin = Selector('#btnLogin')
const Welcome = Selector('#welcome')
const verifyDashboard = Selector('.head')
const Logout = Selector('li a[href="/index.php/auth/logout"]')
const AdminMenu = Selector("#menu_admin_viewAdminModule")
const AdminUserName = Selector("#searchSystemUser_userName")
const searchBtn = Selector("#searchBtn")
const resetBtn = Selector("#resetBtn")

fixture `OrangeHRM`
    .page `https://opensource-demo.orangehrmlive.com/`;
    

test('Test1', async t => {
    await t
    .maximizeWindow()
    .typeText(userName, "Admin")
    .typeText(password, "admin123")
    .click(clickOnLogin)
    .expect(Welcome.textContent).contains('Welcome')
    .expect(verifyDashboard.textContent).contains('Dashboard')
    .click(Welcome)
    .click(Logout)

});

test('Test2', async t => {
    await t
    .maximizeWindow()
    .typeText(userName, "Admin")
    .typeText(password, "admin123")
    .click(clickOnLogin)
    .expect(Welcome.textContent).contains('Welcome')
    .expect(verifyDashboard.textContent).contains('Dashboard')
    .click(AdminMenu)
    .typeText(AdminUserName, "Aishu")
    .click(searchBtn)
    .click(resetBtn)
    .click(Welcome)
    .click(Logout)

});