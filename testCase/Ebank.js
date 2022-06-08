import {  Selector } from "testcafe";


const userName = Selector('[placeholder="Enter username or email address"]')
const password = Selector('[placeholder="Enter password"]')
const signIN = Selector('button[type="submit"]')
const Transfer = Selector('.transfer').nth(1)
const TransferCards = Selector(".section__heading")
const verifyDashboard = Selector('.head')
const Logout = Selector('li a[href="/index.php/auth/logout"]')
const AdminMenu = Selector("#menu_admin_viewAdminModule")
const AdminUserName = Selector("#searchSystemUser_userName")
const searchBtn = Selector("#searchBtn")
const resetBtn = Selector("#resetBtn")

fixture `Ebank`
    .page `https://demo.ebanq.com/log-in`;
    

test('Ebank Transfer Section', async t => {
    await t
    .maximizeWindow()
    .typeText(userName, "Demo-User")
    .typeText(password, "Demo-Access1")
    .click(signIN)
    .click(Transfer)
    .expect(Transfer.textContent).contains('Transfer')
    .click(TransferCards.contains('Transfer Between Accounts'))
   

});