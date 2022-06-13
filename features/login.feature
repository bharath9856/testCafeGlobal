Feature: PRMS
    As a user I can Enter a home page by using my valid credentials and Logout from my user
Scenario: Login with valid credentials
Given I open a Login page of PRMS Application
When I click on to userName and Password
And Enter a valid userName in username Placeholder field
And Enter a valid Password in Password Placeholder field
Then click on to submit button
