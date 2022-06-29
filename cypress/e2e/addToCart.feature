Feature: Add to Cart

    Scenario: Add to cart from product page
        Given I navigate to the page
        When I click on Add to cart button
        Then The pop up Added item is displayed
        And The following text is displayed "Product successfully added to your shopping cart"
    
    