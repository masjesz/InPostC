import {Before, Given, When, Then} from 'cypress-cucumber-preprocessor/steps'

Before(()=> {
    cy.visit("https://inpost.pl/");
    cy.get('#onetrust-accept-btn-handler').as('zaakceptuj');
    cy.get('.alert--component > .close').as('covid');
    cy.get('.inputcontainer > .form--control').as('numer');
    cy.get('.hero--form--container > .btncontainer > .btn--primary').as('znajdz');
})

Given('Otwieram główną stronę Inpost', () => {
    cy.url().should('include', 'inpost');
    cy.get('@zaakceptuj').click();
    cy.get('@covid').click();
})

When("Wpisuję numer {word} paczki", (numer) => {
    cy.get('@numer').type(numer).then(function (linkText) {
        cy.log("Szukam po wybranym numerze" + linkText.text())
    });
    cy.get('@znajdz').click();
})

Then('Paczka dostarczona', () => {
    cy.get('.parcel--statuses--list').as('inPostResult');
    cy.get('@inPostResult').should('contain.text', "Dostarczona");
    cy.screenshot();
})

Then('Paczka przygotowana przez Nadawcę', () => {
    cy.get('.parcel--statuses--list').as('inPostResult');
    cy.get('@inPostResult').should('contain.text', "Przygotowana przez Nadawcę.");
    cy.screenshot();
})

        //W teście GUI powinien na ostatnim ekranie zapisać się screen 
Then('Paczka nie zostaje znaleziona', () => {
    cy.get('.parcel--statuses--list').as('inPostResult');
    cy.get('@inPostResult').should('not.contain.text', "Dostarczona");
    cy.screenshot();
})