import MovieForm from "../MovieForm/MovieForm";
import React from "react";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {moviesData} from "../../mocks/mockMovieData";

describe("MovieForm component", () => {
    it("renders correctly", () => {
        const { container } = render(<MovieForm handleSubmit={() => {}}
        />);
        expect(container).toMatchSnapshot();
    });

    it("renders with initial movie data", () => {
        render(<MovieForm initialMovieInfo={moviesData}
                          handleSubmit={() => {}}
        />);

        const inputTitle = screen.getByRole("textbox", { name: /movie title/i });
        expect(inputTitle).toHaveValue(moviesData.title);

        const inputReleaseDate = screen.getByLabelText(/release date/i);
        expect(inputReleaseDate).toHaveValue(moviesData.releaseDate);

        const inputMovieURL = screen.getByRole("textbox", { name: /movie url/i });
        expect(inputMovieURL).toHaveValue(moviesData.movieUrl);

        const inputMovieRating = screen.getByRole("spinbutton", { name: /movie rating/i });
        expect(inputMovieRating).toHaveValue(parseFloat(moviesData.rating));

        const selectGenres = screen.getAllByRole("option", { selected: true });
        const selectedGenres = selectGenres.map((option) => (option as HTMLOptionElement).value);
        expect(selectedGenres).toEqual(moviesData.genres);

        const inputRuntime = screen.getByRole("textbox", { name: /movie runtime/i });
        expect(inputRuntime).toHaveValue(moviesData.runtime);

        const inputDescription = screen.getByRole("textbox", { name: /movie description/i });
        expect(inputDescription).toHaveValue(moviesData.description);
    });
})
