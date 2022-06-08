import { Selector } from "testcafe";

const fullName = Selector('#userName')
const userEmail = Selector('#userEmail')
const currentAddress = Selector('#currentAddress')
const permanentAddress = Selector('#permanentAddress')
const currentAddressVerify = Selector('#currentAddress').nth(1)
const submitBtn = Selector('#submit')
const name = Selector('#name')
const email = Selector('#email')



fixture `DemoQA`
   
test.page `https://demoqa.com/text-box`('TextBoxpage', async t => {
    await t
    .click(fullName)
    .typeText(fullName,"Bharath Challa")
    .typeText(userEmail,"bharaths@suntechnologies.com")
    .typeText(currentAddress,"Bangalore")
    .typeText(permanentAddress,"Kadapa (AP)")
    .click(submitBtn)
    .expect(name.textContent).contains('Bharath Challa')
    .expect(email.textContent).contains('bharaths@suntechnologies.com')
    .expect(currentAddressVerify.textContent).contains('Bangalore')
   

});



