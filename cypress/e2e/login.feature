Feature: Login website
    Scenario: visting the frontpage
        Given I navigate to the page
        When I login the website
        Then I should see products page

    Scenario: Existing customer logs in
        When I log in with my credentials "abyz@gmail.com" and "Password@123"
        Then I should able to see user page 
   