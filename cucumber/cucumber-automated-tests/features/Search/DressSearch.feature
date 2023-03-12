@regression
Feature: Dress Search
    As a user, I want to be able to search for dresses by type so I can purchase one.

    Background: 
        Given: the browser is at the "Home" page
    Scenario: Search for a dress type that does not exist
        When: the user searches for "floral"
        Then: a no results error message is shown
        And: no products are listed

    Scenario: Search for a dress type that exists
        When: the user searches for "printed"
        Then: the products for "printed" are listed
        And: search results show products related to "printed"