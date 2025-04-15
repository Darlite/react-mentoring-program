import MovieForm from "../MovieForm/MovieForm";
import React from "react";
import {render, screen} from "@testing-library/react";
import {mockMoviesData} from "../../mocks/mockMoviesData";
import userEvent from "@testing-library/user-event";

describe("MovieForm component", () => {
    it("renders correctly", () => {
        const { container } = render(<MovieForm handleSubmit={jest.fn()}
        />);
        expect(container).toMatchSnapshot();
    });

    it("renders with initial movie data", () => {
        render(<MovieForm initialMovieInfo={mockMoviesData}
                          handleSubmit={jest.fn()}
        />);

        const inputTitle = screen.getByRole("textbox", { name: /movie title/i });
        expect(inputTitle).toHaveValue(mockMoviesData.title);

        const inputReleaseDate = screen.getByLabelText(/release date/i);
        expect(inputReleaseDate).toHaveValue(mockMoviesData.release_date);

        const inputMovieURL = screen.getByRole("textbox", { name: /movie url/i });
        expect(inputMovieURL).toHaveValue(mockMoviesData.movieUrl);

        const inputMovieRating = screen.getByRole("spinbutton", { name: /movie rating/i });
        expect(inputMovieRating).toHaveValue(parseFloat(mockMoviesData.vote_average));

        const selectGenres = screen.getAllByRole("option", { selected: true });
        const selectedGenres = selectGenres.map((option) => (option as HTMLOptionElement).value);
        expect(selectedGenres).toEqual(mockMoviesData.genres);

        const inputRuntime = screen.getByRole("textbox", { name: /movie runtime/i });
        expect(inputRuntime).toHaveValue(mockMoviesData.runtime);

        const inputoverview = screen.getByRole("textbox", { name: /movie overview/i });
        expect(inputoverview).toHaveValue(mockMoviesData.overview);
    });

    it("calls the handleSubmit function with proper MovieData", () => {
        const handleSubmit = jest.fn();
        render(<MovieForm initialMovieInfo={mockMoviesData}
                          handleSubmit={handleSubmit}
        />);

        const inputTitle = screen.getByRole("textbox", { name: /movie title/i });
        userEvent.clear(inputTitle);
        userEvent.type(inputTitle, "Joker");

        const updatedMockMovieData = {
            ...mockMoviesData,
            title: "Joker",
        }

        const submitButton = screen.getByRole("button", { name: /submit/i });
        userEvent.click(submitButton);
        expect(handleSubmit).toBeCalledTimes(1);
        expect(handleSubmit).toBeCalledWith(updatedMockMovieData);
    });

    it("check the random ID generation for the MovieData", () => {
        jest.spyOn(Math, "random").mockReturnValue(0.1234);
        const handleSubmit = jest.fn();
        render(<MovieForm handleSubmit={handleSubmit}
        />);

        const submitButton = screen.getByRole("button", { name: /submit/i });
        const expectedId = Math.floor(0.1234 * 10000);
        userEvent.click(submitButton);

        expect(handleSubmit).toBeCalledTimes(1);
        expect(handleSubmit).toBeCalledWith(
            expect.objectContaining({
                    id: expectedId,
                })
        );
    });
})
