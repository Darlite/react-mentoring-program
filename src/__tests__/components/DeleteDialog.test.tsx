import React from "react";
import {render, screen} from "@testing-library/react";
import DeleteDialog from "../../components/DeleteDialog/DeleteDialog";
import {mockMoviesData} from "../../mocks/mockMoviesData";

describe("DeleteDialog", () => {
    it("renders correctly", () => {
        const { container } = render(<DeleteDialog movieToDelete={mockMoviesData}/>);
        expect(container).toMatchSnapshot();
    });

    it("shows the movie title to delete", () => {
        render(<DeleteDialog movieToDelete={mockMoviesData}/>);

        const movieTitle = screen.getByLabelText("movie title");
        expect(movieTitle).toHaveTextContent(mockMoviesData.title);
    });
})