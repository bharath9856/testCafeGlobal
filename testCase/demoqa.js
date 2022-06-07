import {  Selector } from "testcafe";

const fullName = Selector('#userName')
const userEmail = Selector('#userEmail')
const currentAddress = Selector('#currentAddress')
const permanentAddress = Selector('#permanentAddress')
const currentAddressVerify = Selector('#currentAddress').nth(1)
const submitBtn = Selector('#submit')
const name = Selector('#name')
const email = Selector('#email')



fixture `DemoQA`
    .page `https://demoqa.com/`;
    

test.page `https://demoqa.com/text-box`('TextBox page', async t => {
    await t.typeText(fullName,"Bharath Challa")
    .typeText(userEmail,"bharaths@suntechnologies.com")
    .typeText(currentAddress,"Bangalore")
    .typeText(permanentAddress,"Kadapa (AP)")
    .click(submitBtn)
    .expect(name.textContent).contains('Bharath Challa')
    .expect(email.textContent).contains('bharaths@suntechnologies.com')
    .expect(currentAddressVerify.textContent).contains('bharaths@suntechnologies.com')
   

});

test.skip('Test2', async t => {
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