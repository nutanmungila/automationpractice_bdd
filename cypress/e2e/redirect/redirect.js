import { And, Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import {main_website,SIGN_IN_BUTTON,Email,ADD_TO_CART_BUTTON,Password} from "./locaters";



Given('I navigate to the page',()=>{
    cy.visit(main_website);
})

When(/^I log in with my credentials "(.*)" and "(.*)"$/,(username,password)=>{

    cy.get(SIGN_IN_BUTTON).click();
    cy.get('#email').type(username);
    cy.get('#passwd').type(password);
    
    cy.get('#SubmitLogin > span').click();
    cy.get('.account > span').should('have.text','ab yz');
    cy.get('.sf-menu > :nth-child(1) > [href="http://automationpractice.com/index.php?id_category=3&controller=category"]').click();
    cy.get(':nth-child(1) > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click();
    //cy.wait(2000);
    cy.get(':nth-child(2) > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click();
    
    
   

})

And('I click my cart',()=>{
    cy.get('[title="View my shopping cart"]').click();

})

And('I click on some item',()=>{
    cy.get('#product_1_1_0_714866 > .cart_product').click();

})
Then('I redirect to the item page',()=>{
    cy.url().should('eq','http://automationpractice.com/index.php?id_product=1&controller=product#/size-s/color-orange')
})
