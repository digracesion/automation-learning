/// <reference types="Cypress" />
/// <reference types="@applitools/eyes-cypress" />

describe('Contrast Advisor Demo', () => {
    it('should show contrast issues on Applitools dashboard', () => {
        // setup applitools eyes
        cy.eyesOpen({
            appName: 'Contrast Advisor',
            batchName: 'Contrast Advisor',
        });
         // visit the test website
        cy.visit('https://heavyweight.nl/');
        //generate a snapshot of the DOM and upload it to the server
        cy.eyesCheckWindow();
        // close the eyes plugin
        cy.eyesClose();
    });
});