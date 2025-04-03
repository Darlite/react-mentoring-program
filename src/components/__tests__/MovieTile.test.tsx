import MovieTile from "../MovieTile";
import React from "react";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {moviesData} from "../../mocks/mockMovieData";

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
