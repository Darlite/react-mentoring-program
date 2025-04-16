import MovieTile from "../../components/MovieTile/MovieTile";
import React from "react";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {mockMoviesData} from "../../mocks/mockMoviesData";

describe("MovieTile", () => {
    it("renders correctly", () => {
        const { container } = render(<MovieTile movieDetails={mockMoviesData}
                                                onClick={() => {}}
                                                handleDelete={() => {}}
                                                handleEdit={() => {}}
        />);
        expect(container).toMatchSnapshot();
    });

    it("shows the kebab menu on hover", () => {
        render(<MovieTile
            movieDetails={mockMoviesData}
            onClick={() => {}}
            handleDelete={() => {}}
            handleEdit={() => {}} />);
        const movieTile = screen.getByTestId("movie-tile");
        userEvent.hover(movieTile);
        expect(screen.getByText("︙")).toBeInTheDocument();
        userEvent.unhover(movieTile);
        expect(screen.queryByText("︙")).not.toBeInTheDocument();
    });

    it("shows and closes the context menu", () => {
        render(<MovieTile movieDetails={mockMoviesData}
                          onClick={() => {}}
                          handleDelete={() => {}}
                          handleEdit={() => {}} />);
        const movieTile = screen.getByTestId("movie-tile");
        userEvent.hover(movieTile);

        const kebabMenu = screen.getByText("︙");
        userEvent.click(kebabMenu);
        expect(screen.getByTestId("context-menu")).toBeInTheDocument();
        expect(screen.getByText("Edit")).toBeInTheDocument();
        expect(screen.getByText("Delete")).toBeInTheDocument();

        const closeButton = screen.getByText("X");
        userEvent.click(closeButton);
        expect(screen.queryByTestId("context-menu")).not.toBeInTheDocument();
    });

    it("handle click on the movie tile image", () => {
        const onClick = jest.fn();
        render(<MovieTile movieDetails={mockMoviesData}
                          onClick={onClick}
                          handleDelete={() => {}}
                          handleEdit={() => {}} />);
        userEvent.click(screen.getByRole("img"));
        expect(onClick).toBeCalled();
    });

})
