import Dialog from "../Dialog/Dialog";
import React from "react";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Dialog component", () => {
    it("renders correctly for Delete Dialog", () => {
        const { container } = render(<Dialog dialogTitle={"Delete movie"}
                                             content={""}
                                             handleToggleDialog={() => {}}
        />);
        expect(container).toMatchSnapshot();
    });

    it("renders Add movie dialog", () => {
        render(<Dialog dialogTitle={"Add movie"}
                       content={""}
                       handleToggleDialog={() => {}}
        />);

        expect(screen.getByText("Add movie")).toBeInTheDocument();
    });

    it("renders Edit movie dialog", () => {
        render(<Dialog dialogTitle={"Edit movie"}
                       content={""}
                       handleToggleDialog={() => {}}
        />);

        expect(screen.getByText("Edit movie")).toBeInTheDocument();
    });

    it("handles the click on the Close button", () => {
        const handleToggleDialog = jest.fn();

        render(<Dialog dialogTitle={"Edit movie"}
                       content={""}
                       handleToggleDialog={handleToggleDialog}
        />);

        const closeButton = screen.getByText("X");
        userEvent.click(closeButton);
        expect(handleToggleDialog).toHaveBeenCalled();
    })
})
