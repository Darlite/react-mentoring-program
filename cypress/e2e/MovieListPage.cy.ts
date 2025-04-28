import {mockMoviesData} from "../../src/mocks/mockMoviesData";

describe('MovieListPage test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });

    it('should search for a movie', () => {
        const searchParam = "28";
        cy.get('[data-testid="movie-tile"] h2').contains(searchParam).should('not.exist');

        cy.get('[data-cy="search-input"]').type(searchParam);
        cy.contains('Search').click();

        cy.url().should('contain', `search=${searchParam}`);

        cy.get('[data-testid="movie-tile"] h2').should('contain', searchParam);
    });

    it('should change a genre', () => {
        const genre = "Horror";
        cy.contains('span', genre).click();
        cy.url().should('contain', genre);

        cy.get('[data-cy="movie-tile-genres"]').each(($el) => {
            cy.wrap($el).should('contain', genre);
        });
    });

    it('should sort by title', () => {
        cy.intercept("GET", "**/movies?**sortBy=title**").as("sortMovies");
        cy.get('[data-cy="sort-select"]').select("Title");
        cy.url().should('contain', "sortBy=title");

        cy.wait('@sortMovies');
        cy.get('[data-testid="movie-tile"] h2')
            .should("have.length.greaterThan", 0)
            .then(($titles) => {
            const titles = [...$titles].map($titles => $titles.textContent?.trim() || "");
            const sorted = [...titles].sort((a, b) => a.localeCompare(b));
            expect(titles).to.deep.eq(sorted);
        });
    });

    it('should sort by release date', () => {
        const theOldestMovieYear = "1925";
        cy.intercept("GET", "**/movies?**sortBy=title**").as("sortMovies");
        cy.get('[data-cy="sort-select"]').select("Title");
        cy.get('[data-cy="sort-select"]').select("Release Date");
        cy.url().should('contain', "sortBy=release_date");

        cy.wait('@sortMovies');
        cy.get('[data-cy="movie-tile-release-date"]')
            .first()
            .should("have.text", theOldestMovieYear);
    });

    it('should navigate to movie details on movie tile click', () => {
        cy.get('[data-testid="movie-tile"]').first().click();

        cy.url().should('contain', "/movies/");
        cy.get('[data-testid="movie-details"]');
    });

    it('should navigate back from movie details', () => {
        cy.get('[data-testid="movie-tile"]').first().click();
        cy.url().should('contain', "/movies/");

        cy.get('[data-cy="movie-details-back-button"]').click();
        cy.url().should('not.include', "/movies/");
        cy.get('[data-testid="movie-details"]').should('not.exist');
    });

    it('should open movie details', () => {
        cy.visit(`movies/${mockMoviesData.id}`);

        cy.get('[data-testid="movie-details"]');

        cy.get(`[alt="${mockMoviesData.title}"]`).should('be.visible');
        cy.get('[data-cy="movie-details-title"]').should('have.text', mockMoviesData.title);
        cy.get('[data-cy="movie-details-rating"]').should('have.text', mockMoviesData.vote_average);
        cy.get('[data-cy="movie-details-genres"]').should('contain.text', "Crime");
        cy.get('[data-cy="movie-details-genres"]').should('contain.text', "Thriller");
        cy.get('[data-cy="movie-details-release-date"]').should('have.text', mockMoviesData.release_date);
        cy.get('[data-cy="movie-details-runtime"]').should('have.text', mockMoviesData.runtime);
        cy.get('[data-cy="movie-details-overview"]').should('not.be.empty');
    });

    it('should handle invalid movie request', () => {
        const invalidMovieId = -1;
        cy.visit(`movies/${invalidMovieId}`);

        cy.contains(`Movie has not been found`);
    });
});
