import React from "react";
import {render, screen} from "@testing-library/react";
import AddMovieButton from "../../components/AddMovieButton/AddMovieButton";
import userEvent from "@testing-library/user-event";

describe("AddMovieButton", () => {
    it("renders correctly", () => {
        const { container } = render(<AddMovieButton handleShowDialog={jest.fn}/>);
        expect(container).toMatchSnapshot();
    });

    it("handles a click correctly,", () => {
        const handleShowDialog = jest.fn();
        render(<AddMovieButton handleShowDialog={handleShowDialog}/>);

        const addButton = screen.getByRole("button");

        userEvent.click(addButton);
        expect(handleShowDialog).toHaveBeenCalled();
    });
})