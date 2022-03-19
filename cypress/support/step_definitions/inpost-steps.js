import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'

Given('Otwieram główną stronę Inpost', () => {
    cy.visit("https://inpost.pl/");
    cy.get('#onetrust-accept-btn-handler').click();
    cy.get('.alert--component > .close').click()
})

When('Wpisuję nr paczki {word}', (nrPaczki) => {
    cy.get('.inputcontainer > .form--control').type(nrPaczki)
    cy.get('.hero--form--container > .btncontainer > .btn--primary').click()
})

Then('Paczka zostaje znaleziona {word}', (url) => {
    cy.url()
        .should('eq', `${Cypress.config().baseUrl}${url}`)

})