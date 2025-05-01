import {render, screen, waitFor} from "@testing-library/react";
import SortControl from "../../components/SortControl/SortControl";
import userEvent from "@testing-library/user-event";

describe('SortControl', () => {
    it("renders with initial selection and sort order", () => {
        const onSelect = jest.fn();
        render(<SortControl currentSelection={"Release Date"}
                            onSelect={onSelect}
                            sortOrder={"asc"}
                            onSortOrderChange={jest.fn}/>);
        const sortControlSelect = screen.getByRole("combobox");
        expect(sortControlSelect).toBeInTheDocument();
        expect(sortControlSelect).toHaveValue("release_date");

        const sortOrderButton = screen.getByLabelText("Sort order button");
        expect(sortOrderButton).toBeInTheDocument();

        const sortArrow = screen.getByTestId("sort-arrow");
        expect(sortArrow).toBeInTheDocument();
        expect(sortArrow).toHaveClass("arrowUp");
    });

    it("handles the other selection", () => {
        const onSelect = jest.fn();
        render(<SortControl currentSelection={"Release Date"}
                            onSelect={onSelect}
                            sortOrder={"asc"}
                            onSortOrderChange={jest.fn}/>);
        const sortControlSelect = screen.getByRole("combobox");
        userEvent.selectOptions(sortControlSelect, "Title");
        expect(onSelect).toHaveBeenCalledWith("title");
    });

    it("handles the other sorting order", async () => {
        const onSortOrderChange = jest.fn();
        render(<SortControl currentSelection={"Release Date"}
                            onSelect={jest.fn}
                            sortOrder={"asc"}
                            onSortOrderChange={onSortOrderChange}/>);
        const sortOrderButton = screen.getByLabelText("Sort order button");
        userEvent.click(sortOrderButton);
        await waitFor(() => {
            expect(onSortOrderChange).toHaveBeenCalledTimes(1);
        });
    });
})