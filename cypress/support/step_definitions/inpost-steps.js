import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'

Given('Otwieram główną stronę Inpost', () => {
    cy.visit("https://inpost.pl/");
    cy.get('#onetrust-accept-btn-handler').click();
    cy.get('.alert--component > .close').click()
})

When("Wpisuję {word} paczki", (numer) => {
    cy.get('.inputcontainer > .form--control').type(numer)
    cy.get('.hero--form--container > .btncontainer > .btn--primary').click()
})

Then('Paczka zostaje znaleziona {word}', (url) => {
    cy.url()
        .should('eq', `${Cypress.config().baseUrl}${url}`)

        //W teście GUI powinien na ostatnim ekranie zapisać się screen 

})