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
        cy.get('input[name=release_date]').should('exist');
        cy.get('input[name=poster_path]').should('exist');
        cy.get('input[name=vote_average]').should('exist');
        cy.get('select[name=genres]').should('exist');
        cy.get('textarea[name=overview]').should('exist');
    });
})
