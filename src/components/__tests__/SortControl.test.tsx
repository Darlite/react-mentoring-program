import {render, screen} from "@testing-library/react";
import SortControl from "../SortControl/SortControl";
import userEvent from "@testing-library/user-event";

describe('SortControl', () => {
    it("renders correctly", () => {
        const { container } = render(<SortControl currentSelection={"Release Date"} onSelect={() => {}} />);
        expect(container).toMatchSnapshot();
    });

    it("renders with initial selection", () => {
        const onSelect = jest.fn();
        render(<SortControl currentSelection={"Release Date"} onSelect={onSelect} />);
        const sortControlSelect = screen.getByRole("combobox");
        expect(sortControlSelect).toHaveValue("release_date");
    });

    it("handles the other selection", () => {
        const onSelect = jest.fn();
        render(<SortControl currentSelection={"Release Date"} onSelect={onSelect} />);
        const sortControlSelect = screen.getByRole("combobox");
        userEvent.selectOptions(sortControlSelect, "Title");
        expect(onSelect).toHaveBeenCalledWith("title");
    });
})