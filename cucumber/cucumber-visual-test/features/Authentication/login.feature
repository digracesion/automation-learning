@regression
Feature: Login

  As a user, I want to be able to login to my account to view my account details
    
    Scenario: Attempting to login with valid credentials
      Given: the browser is at the "Login" page
      When: the user tries to enter valid credentials "<email>" to login
      Then: the user is successfully logged in

      @dev
      Examples:
        | email |
        | cucumber_automation_dev@gmail.com |
      
      @int
      Examples:
        | email |
        | cucumber_automation_int@gmail.com   |

    Scenario: Attempting to login with invalid credentials
      Given: the browser is at the "Login" page
      When: the user tries to enter invalid credentials "<email>" to login
      Then: the title of the page should be "Login - My Store"
      And: an authentication error message should say "<error>"

      Examples:
        | email | error |
        | 123_dev@gmail.com | Authentication failed. |
        | 345_int@gmail.com | Authentication failed. |
        | some random stuff | Invalid email address |
        |                   | An email address is required to login |