import {cypressTestMovie} from "../../src/mocks/cypressTestMovie";

describe('Movie CRUD', () => {
    it('should create a movie', () => {
        cy.visit('/new');

        cy.get('input[name=title]').type(cypressTestMovie.title);
        cy.get('input[name=release_date]').type(cypressTestMovie.release_date);
        cy.get('input[name=poster_path]').type(cypressTestMovie.poster_path);
        cy.get('input[name=vote_average]').type(cypressTestMovie.vote_average);
        cy.get('select[name=genres]').select(cypressTestMovie.genres);
        cy.get('input[name=runtime]').type(cypressTestMovie.runtime);
        cy.get('textarea[name=overview]').type(cypressTestMovie.overview);

        cy.get(`button[aria-label="Submit new movie"]`).click();

        cy.contains(cypressTestMovie.title).should('exist');
    });

    it('should edit a movie', () => {
        const searchParam = cypressTestMovie.title;

        cy.visit('/');

        cy.get('[data-cy="search-input"]').type(searchParam);
        cy.contains('Search').click();
        cy.url().then((url: string) => {
            const params = new URL(url).searchParams;
            expect(params.get('search')).to.eq(searchParam);
        });

        cy.contains(searchParam)
            .parents('[data-testid="movie-tile"]')
            .trigger('mouseover');
        cy.get('[role="button"]').contains('︙').click();
        cy.contains('div', 'Edit').click();

        cy.get('input[name=title]').should('have.value', cypressTestMovie.title);
        cy.get('input[name=release_date]').should('have.value', cypressTestMovie.release_date);
        cy.get('input[name=poster_path]').should('have.value', cypressTestMovie.poster_path);
        cy.get('input[name=vote_average]').should('have.value', cypressTestMovie.vote_average);
        cy.get('select[name=genres]').should('contain.value', cypressTestMovie.genres[0]);
        cy.get('select[name=genres]').should('contain.value', cypressTestMovie.genres[1]);
        cy.get('input[name=runtime]').should('have.value',cypressTestMovie.runtime);
        cy.get('textarea[name=overview]').should('have.value',cypressTestMovie.overview);

        cy.get('input[name=title]').type(cypressTestMovie.editedMovieTitle);
        cy.get(`button[aria-label="Submit new movie"]`).click();

        cy.contains(cypressTestMovie.title).should('not.exist');
        cy.contains(cypressTestMovie.editedMovieTitle).should('exist');
    });

    it('should delete a movie', () => {
        const searchParam = cypressTestMovie.editedMovieTitle;

        cy.visit('/');

        cy.get('[data-cy="search-input"]').type(searchParam);
        cy.contains('Search').click();
        cy.url().then((url: string) => {
            const params = new URL(url).searchParams;
            expect(params.get('search')).to.eq(searchParam);
        });

        cy.contains(searchParam)
            .parents('[data-testid="movie-tile"]')
            .trigger('mouseover');
        cy.get('[role="button"]').contains('︙').click();
        cy.contains('div', 'Delete').click();

        cy.get(`button[aria-label="Confirm"]`).click();

        cy.get('[data-cy="search-input"]').type(searchParam);
        cy.contains('Search').click();

        cy.contains('No movies found');
    });
});
