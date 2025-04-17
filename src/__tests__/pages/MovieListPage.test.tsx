import {render, screen, waitFor} from "@testing-library/react";
import axios from "axios";
import MovieListPage from "../../pages/MovieListPage/MovieListPage";
import {mockMovieList} from "../../mocks/mockMovieList";
import React from "react";
import userEvent from "@testing-library/user-event";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('MovieListPage', () => {
    beforeEach(() => {
        mockedAxios.get.mockResolvedValue({
            data: {
                data: mockMovieList,
            }
        });
    });

    it("renders a search form and a movie list by default", async () => {
        render(<MovieListPage />);

        await waitFor(() => {
            const searchInput = screen.getByRole("textbox", { name: /Search movie/i });
            expect(searchInput).toBeInTheDocument();
        });

        await waitFor(() => {
            const movieList = screen.getByTestId("movie-list");
            expect(movieList).toBeInTheDocument();
        });
    });

    it("should handle error correctly", async () => {
        const error = new Error("Network Error");
        mockedAxios.get.mockRejectedValue(error);

        render(<MovieListPage />);

        const consoleLogSpy = jest.spyOn(console, "error");

        expect(screen.getByText("Loading movies...")).toBeInTheDocument();

        await waitFor(() => {
            expect(consoleLogSpy).toHaveBeenCalledWith("Error getting movie list: ", error);
        });

        await waitFor(() => {
            expect(screen.queryByText("Loading movies...")).not.toBeInTheDocument();
        });

        await waitFor(() => {
            expect(screen.getByText("No movies found")).toBeInTheDocument();
        });
    });

    it("should handle click on a movie tile and click on the back button", async () => {
        render(<MovieListPage />);

        const image = await screen.findByAltText(mockMovieList[0].title);

        expect(image).toBeInTheDocument();
        userEvent.click(image);
        expect(screen.getByTestId("movie-details")).toBeInTheDocument();

        const backToSearchButton = screen.getByText("Back to the search");
        userEvent.click(backToSearchButton);
        expect(screen.queryByTestId("movie-details")).not.toBeInTheDocument();

        const searchInput = screen.getByRole("textbox", { name: /Search movie/i });
        expect(searchInput).toBeInTheDocument();
    });

    it("should open edit dialog window and submit", async () => {
        const movie = mockMovieList[0];
        const consoleLogSpy = jest.spyOn(console, "error");

        render(<MovieListPage />);

        const movieTiles = await screen.findAllByTestId("movie-tile");
        const movieTile = movieTiles[0];

        userEvent.hover(movieTile);
        const kebabIcon = screen.getByText("︙");
        userEvent.click(kebabIcon);
        const editButton = screen.getByText("Edit");
        userEvent.click(editButton);

        const dialogTitle = screen.getByText("EDIT MOVIE");
        expect(dialogTitle).toBeInTheDocument();

        const submitButton = screen.getByLabelText("Submit");
        userEvent.click(submitButton);

        expect(consoleLogSpy).toHaveBeenCalledWith(movie);
    });

    it("should pass search query from the search input", async () => {
        const movieToSearch = "Joker";
        render(<MovieListPage />);

        const searchInput = await screen.findByRole("textbox", { name: /Search movie/i });
        const submitButton = await screen.findByText("Search");
        expect(searchInput).toBeInTheDocument();
        userEvent.type(searchInput, movieToSearch);
        userEvent.click(submitButton);

        await waitFor(() => {
            expect(mockedAxios.get).toHaveBeenCalledWith(
                expect.stringContaining(`search=${movieToSearch}`)
            );
        });
    });

    it("should change a genre to documentary", async () => {
        const documentaryGenre = "Documentary";
        render(<MovieListPage />);

        const genre = await screen.findByRole("button", { name: new RegExp(documentaryGenre, "i") });
        userEvent.click(genre);

        await waitFor(() => {
            expect(mockedAxios.get).toHaveBeenCalledWith(
                expect.stringContaining(`filter=${documentaryGenre}`)
            );
        });
    });

    it("should change a sort criterion", async () => {
        render(<MovieListPage />);

        const sortControlSelect = screen.getByRole("combobox");
        userEvent.selectOptions(sortControlSelect, "Title");

        await waitFor(() => {
            expect(mockedAxios.get).toHaveBeenCalledWith(
                expect.stringContaining("sortBy=title")
            );
        });
    });
})