import {  Selector } from "testcafe";


const userName = Selector('[placeholder="Enter username or email address"]')
const password = Selector('[placeholder="Enter password"]')
const signIN = Selector('button[type="submit"]')
const TransferCards = Selector(".sections-container").withText('Transfer Between Accounts');


fixture `Ebank`
    .page `https://demo.ebanq.com/`;
    

test('Ebank Transfer Section', async t => {
    await t
    .maximizeWindow()
    .typeText(userName, "Demo-User")
    .typeText(password, "Demo-Access1")
    .click(signIN)
    .click(Transfer)
    .expect(Transfer.textContent).contains('Transfer')
    .click(TransferCards)
   

});