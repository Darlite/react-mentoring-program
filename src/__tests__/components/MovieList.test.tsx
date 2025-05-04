import {render, screen} from "@testing-library/react";
import MovieList from "../../components/MovieList/MovieList";
import {mockMovieList} from "../../mocks/mockMovieList";
import userEvent from "@testing-library/user-event";

describe('MovieList', () => {
    it("renders correctly", () => {
        render(<MovieList movieList={mockMovieList}
                                                handleTileClick={jest.fn}
                                                handleEditMovie={jest.fn}
                                                handleDeleteMovie={jest.fn}/>);

        const movieList = screen.getByTestId("movie-list");
        expect(movieList).toBeInTheDocument();
    });

    it("handles the edit movie click", () => {
        const firstMovieFromTheList = mockMovieList[0];
        const movieTitle = firstMovieFromTheList.title;
        const handleEditMovie = jest.fn();
        render(<MovieList movieList={mockMovieList}
                          handleTileClick={jest.fn}
                          handleEditMovie={handleEditMovie}
                          handleDeleteMovie={jest.fn}/>);

        const image = screen.getByAltText(movieTitle);
        userEvent.hover(image);

        const kebabIcon = screen.getByText("︙");
        userEvent.click(kebabIcon);

        const editButton = screen.getByText("Edit");
        userEvent.click(editButton);

        expect(handleEditMovie).toBeCalledTimes(1);
        expect(handleEditMovie).toBeCalledWith(firstMovieFromTheList);
    });

    it("handles the delete movie click", () => {
        const firstMovieFromTheList = mockMovieList[0];
        const movieTitle = firstMovieFromTheList.title;
        const handleDeleteMovie = jest.fn();
        render(<MovieList movieList={mockMovieList}
                          handleTileClick={jest.fn}
                          handleEditMovie={jest.fn}
                          handleDeleteMovie={handleDeleteMovie}/>);

        const image = screen.getByAltText(movieTitle);
        userEvent.hover(image);

        const kebabIcon = screen.getByText("︙");
        userEvent.click(kebabIcon);

        const deleteButton = screen.getByText("Delete");
        userEvent.click(deleteButton);

        expect(handleDeleteMovie).toBeCalledTimes(1);
        expect(handleDeleteMovie).toBeCalledWith(firstMovieFromTheList);
    });
});
