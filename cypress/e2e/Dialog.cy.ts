import {DialogType} from "../../src/constants/DialogType";

describe('Dialog test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });

    it('opens Add Movie dialog', () => {
        cy.contains('+ Add movie').click();

        cy.get('h1').should('contain', DialogType.AddMovie);

        cy.get('form').should('exist');
        cy.get('input[name=title]').should('exist');
        cy.get('input[name=releaseDate]').should('exist');
        cy.get('input[name=movieUrl]').should('exist');
        cy.get('input[name=rating]').should('exist');
        cy.get('select[name=genres]').should('exist');
        cy.get('textarea[name=description]').should('exist');
    });
})
