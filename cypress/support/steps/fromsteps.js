import { before,Given,When,Then,And } from "cypress-cucumber-preprocessor/steps";

Given('on the contact page',()=>{
    cy.visit('https://automationexercise.com/')

})

When('enter valid details',()=>{
    cy.xpath('//a[@style="color: orange;"]').click()
    cy.wait(2000)
    cy.xpath('(//div[@class="form-group col-md-6"])[1]').type('punit')
    cy.get('[placeholder="Email"]').type('punitnagvanshi@gmail.com')
    cy.get('[placeholder="Subject"]').type('computer')
    cy.get('[id="message"]').type('hello')

})

And('submit the from',()=>{
    cy.get('[type="submit"][type="submit"][data-qa="submit-button"]').click()

})
Then('see the successfully message',()=>{
    cy.get('[style="display: block;"][class="status alert alert-success"]').should('be.visible')


})

