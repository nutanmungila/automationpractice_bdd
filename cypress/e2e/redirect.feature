Feature: Re-direct to the correct page



    Scenario: Redirect to the product page from my-orders page
        Given I navigate to the page
        When I log in with my credentials "abyz@gmail.com" and "Password@123"
        And I click my cart
        And I click on some item
        
