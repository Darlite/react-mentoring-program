import MovieForm from "../../components/MovieForm/MovieForm";
import React from "react";
import {render, screen, waitFor} from "@testing-library/react";
import {mockMoviesData} from "../../mocks/mockMoviesData";
import userEvent from "@testing-library/user-event";

describe("MovieForm component", () => {
    it("renders correctly", () => {
        const { container } = render(<MovieForm onMovieSubmit={jest.fn()}
        />);
        expect(container).toMatchSnapshot();
    });

    it("renders with initial movie data", () => {
        render(<MovieForm initialMovieInfo={mockMoviesData}
                          onMovieSubmit={jest.fn()}
        />);

        const inputTitle = screen.getByRole("textbox", { name: /movie title/i });
        expect(inputTitle).toHaveValue(mockMoviesData.title);

        const inputReleaseDate = screen.getByLabelText(/release date/i);
        expect(inputReleaseDate).toHaveValue(mockMoviesData.release_date);

        const inputPosterPath = screen.getByRole("textbox", { name: /poster path/i });
        expect(inputPosterPath).toHaveValue(mockMoviesData.poster_path);

        const inputMovieRating = screen.getByRole("spinbutton", { name: /movie rating/i });
        expect(inputMovieRating).toHaveValue(parseFloat(mockMoviesData.vote_average));

        const selectGenres = screen.getAllByRole("option", { selected: true });
        const selectedGenres = selectGenres.map((option) => (option as HTMLOptionElement).value);
        expect(selectedGenres).toEqual(mockMoviesData.genres);

        const inputRuntime = screen.getByRole("textbox", { name: /movie runtime/i });
        expect(inputRuntime).toHaveValue(mockMoviesData.runtime);

        const inputOverview = screen.getByRole("textbox", { name: /movie overview/i });
        expect(inputOverview).toHaveValue(mockMoviesData.overview);
    });

    it("calls the handleSubmit function with proper MovieData", async () => {
        const handleSubmit = jest.fn();
        render(<MovieForm initialMovieInfo={mockMoviesData}
                          onMovieSubmit={handleSubmit}
        />);

        const inputTitle = screen.getByRole("textbox", { name: /movie title/i });
        userEvent.clear(inputTitle);
        userEvent.type(inputTitle, "Joker");

        // const updatedMockMovieData = {
        //     ...mockMoviesData,
        //     title: "Joker",
        // }

        const submitButton = screen.getByRole("button", { name: /submit new movie/i });

        userEvent.click(submitButton);

        await waitFor(() => {
            expect(handleSubmit).toBeCalledTimes(1);
        });
    });
})
