/// <reference types="cypress"/>

describe('Todo application', () => {
    beforeEach(() => {
        // visit the application web page
        cy.visit('http://todomvc.com/examples/react');
        // inject axe core runtime in the test application
        cy.injectAxe();
    });
    it('should log any accessibility failures', () => {
        // scan the entire page for any accessibility failures
        cy.checkA11y();
    });

    it('should exclude specific elements on the page', () => {
        // exclude the selected element
        cy.checkA11y({
            exclude: ['.learn']
        });
    });
    
    it('should only test a specific element on the page', () => {
        // test only the selected element
        cy.checkA11y('.learn');
    });

    it('should only include violations with serious and critical impacts', () => {
        cy.checkA11y(null,
            {
                includedImpacts: ['critical', 'serious']
            }
        );
    });
    
    it('should exclude specific accessibility rules', () => {
        cy.checkA11y(null, {
            rules: {
                'color-contrast': {
                    enabled: false
                },
                'heading-order':{
                    enabled: true
                },
                'label':{
                    enabled: true
                }
            },
        });
    });
});