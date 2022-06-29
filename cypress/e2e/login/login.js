import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import {main_website,SIGN_IN_BUTTON,Email,Password} from "./locaters";

Given('I navigate to the page',()=>{
    cy.visit(main_website);
})
When('I login the website',()=>{
    cy.visit(main_website);
})
Then('I should see products page',()=>{
    
    //cy.url(swag_lab_products_page).should(eq,swag_lab_products_page)
})

When(/^I log in with my credentials "(.*)" and "(.*)"$/,(username,password)=>{
    cy.get(SIGN_IN_BUTTON).click();
    cy.get(Email).type(username);
    cy.get(Password).type(password);
    cy.get('#SubmitLogin > span').click();
    cy.log(username);
    cy.get('.account > span').should('have.text','ab yz');

})

