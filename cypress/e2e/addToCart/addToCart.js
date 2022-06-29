import { And, Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { main_website,ADD_TO_CART_BUTTON,POP_UP } from "../addToCart/locaters";


Given('I navigate to the page',()=>{
    cy.visit(main_website);
})

When('I click on Add to cart button',()=>{
    cy.get(ADD_TO_CART_BUTTON).click();
    cy.wait(2000);
})

Then('The pop up Added item is displayed',()=>{
    cy.get(POP_UP).should('be.visible');
})

And(/^The following text is displayed "(.*)"$/,(msg)=>{
    cy.get(POP_UP).contains(msg);
})