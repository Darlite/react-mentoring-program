import MovieTile from "../MovieTile";
import React from "react";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const moviesData = {
    imageUrl: "images/Pulp_Fiction.png",
    movieName: "Pulp Fiction",
    releaseYear: 1994,
    relevantGenres: ["Crime", "Thriller"],
    duration: "2h 34m",
    rating: 8.9,
    description: "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra",
}

describe("MovieTile", () => {
    it("renders correctly", () => {
        const { container } = render(<MovieTile movieDetails={moviesData}
                          onClick={() => {}}
        />);
        expect(container).toMatchSnapshot();
    });

    it("shows the kebab menu on hover", () => {
        render(<MovieTile movieDetails={moviesData} onClick={() => {}} />);
        const movieTile = screen.getByTestId("movieTile");
        userEvent.hover(movieTile);
        expect(screen.getByText("︙")).toBeInTheDocument();
        userEvent.unhover(movieTile);
        expect(screen.queryByText("︙")).not.toBeInTheDocument();
    });

    it("shows and closes the context menu", () => {
        render(<MovieTile movieDetails={moviesData} onClick={() => {}} />);
        const movieTile = screen.getByTestId("movieTile");
        userEvent.hover(movieTile);

        const kebabMenu = screen.getByText("︙");
        userEvent.click(kebabMenu);
        expect(screen.getByTestId("contextMenu")).toBeInTheDocument();
        expect(screen.getByText("Edit")).toBeInTheDocument();
        expect(screen.getByText("Delete")).toBeInTheDocument();

        const closeButton = screen.getByText("X");
        userEvent.click(closeButton);
        expect(screen.queryByTestId("contextMenu")).not.toBeInTheDocument();
    });

    it("handle click on the movie tile image", () => {
        const onClick = jest.fn();
        render(<MovieTile movieDetails={moviesData} onClick={onClick} />);
        userEvent.click(screen.getByRole("img"));
        expect(onClick).toBeCalled();
    });

})
