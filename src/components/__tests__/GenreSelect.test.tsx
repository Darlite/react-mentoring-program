import GenreSelect from "../GenreSelect/GenreSelect";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const genreNames = ['Comedy', 'Horror', 'Crime'];

describe('GenreSelect component', () => {
    it('renders props correctly', () => {
        render(<GenreSelect genreNames={genreNames}
                            selectedGenre={""}
                            onSelect={() => {
                            }}/>);
        const buttons = screen.getAllByRole("button");
        expect(buttons).toHaveLength(genreNames.length);
        buttons.forEach((button) => {
            expect(genreNames).toContain(button.textContent);
        })
    });

    it('initial button highlighting', () => {
        const selectedGenre = "Horror";
        render(<GenreSelect genreNames={genreNames}
                            selectedGenre={selectedGenre}
                            onSelect={() => {
                            }}/>);
        const buttons = screen.getAllByRole("button");
        let selectedButton = buttons.find(button => button.textContent === selectedGenre);

        if (!selectedButton) {
            throw new Error(`Button with a ${selectedGenre} genre wasn't found`);
        }

        expect(selectedButton.classList).toContain("selected");
    });

    it('changing the highlighted button on click', () => {
        const onSelect = jest.fn();
        const genreToSelect = "Comedy";
        render(<GenreSelect genreNames={genreNames}
                            selectedGenre={""}
                            onSelect={onSelect}/>);
        const buttons = screen.getAllByRole("button");
        let selectedButton = buttons.find(button => button.textContent === genreToSelect);

        if (!selectedButton) {
            throw new Error(`Button with a ${genreToSelect} genre wasn't found`);
        }

        userEvent.click(selectedButton);
        expect(onSelect).toHaveBeenCalledWith(genreToSelect);
    });
})
