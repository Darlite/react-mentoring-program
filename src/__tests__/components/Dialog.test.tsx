import Dialog from "../../components/Dialog/Dialog";
import React from "react";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {DialogType} from "../../constants/DialogType";

describe("Dialog component", () => {
    it("renders Add movie dialog", () => {
        render(<Dialog dialogTitle={DialogType.AddMovie}
                       content={""}
                       handleToggleDialog={() => {}}
                       showDialog={true}
        />);

        expect(screen.getByText(DialogType.AddMovie)).toBeInTheDocument();
    });

    it("renders Edit movie dialog", () => {
        render(<Dialog dialogTitle={DialogType.EditMovie}
                       content={""}
                       handleToggleDialog={() => {}}
                       showDialog={true}
        />);

        expect(screen.getByText(DialogType.EditMovie)).toBeInTheDocument();
    });

    it("handles the click on the close button", () => {
        const handleToggleDialog = jest.fn();

        render(<Dialog dialogTitle={DialogType.EditMovie}
                       content={""}
                       handleToggleDialog={handleToggleDialog}
                       showDialog={true}
        />);

        const closeButton = screen.getByText("X");
        userEvent.click(closeButton);
        expect(handleToggleDialog).toHaveBeenCalled();
    })
})
