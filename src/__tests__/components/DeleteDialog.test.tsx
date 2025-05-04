import React from "react";
import {render, screen} from "@testing-library/react";
import DeleteDialog from "../../components/DeleteDialog/DeleteDialog";
import {mockMoviesData} from "../../mocks/mockMoviesData";

describe("DeleteDialog", () => {
    it("renders correctly", () => {
        const { container } = render(<DeleteDialog movieToDelete={mockMoviesData} onDelete={jest.fn()} />);
        expect(container).toMatchSnapshot();
    });

    it("shows the movie title to delete", () => {
        render(<DeleteDialog movieToDelete={mockMoviesData} onDelete={jest.fn()}/>);

        const movieTitle = screen.getByLabelText("movie title");
        expect(movieTitle).toHaveTextContent(mockMoviesData.title);
    });
})