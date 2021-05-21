# Lab8_Starter

## Author: Salwan Shathar

## Check your understanding q's
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)

    1

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

    Yes, so that way we can see if the message being written is indeed the same one being sent.

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters

    Yes, we can pass a string with over 80 characters and see if the application prevented that message.

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?

    The browser will run without a browser user interface.

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?

    We can add `await page.click('header > img'); await page.waitForTimeout(500);` to "manually" click on settings once we go to the website.
