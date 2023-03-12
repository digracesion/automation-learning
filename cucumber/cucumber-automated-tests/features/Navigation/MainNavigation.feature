@regression
Feature: Menu Navigation

    As a user, I want to be able to navigate throughout the website using the menu links to get to various pages

    Scenario: Navigating through the main menu options from the Home Page
        Given: the web browser is at the "Home" page
        When: the user clicks on the "<menuOption>" menu option in the menu
        Then: the title of the page should be "<pageTitle>"

        Examples:
            | menuOption    | pageTitle         |
            | Women         | Women - My Store  |
            | Dresses       | Dresses - My Store|
            | T-Shirts      | T-Shirts - My Store|