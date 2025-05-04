import InputField from "../../components/InputField/InputField";
import {render, screen} from "@testing-library/react";

describe('InputField', () => {
    it('renders correctly with all props', () => {
        render(<InputField id="movieTitle"
                           label="Title"
                           type="text"
                           name="movieTitle"
                           placeholder="Movie Title"
                           defaultValue="Joker"
                           ariaLabel="Movie Title" />
        );

        expect(screen.getByLabelText("Title")).toBeInTheDocument();

        const input = screen.getByRole("textbox", { name: "Movie Title" });
        expect(input).toHaveAttribute("id", "movieTitle");
        expect(input).toHaveAttribute("type", "text");
        expect(input).toHaveAttribute("placeholder", "Movie Title");
        expect(input).toHaveValue("Joker");
        expect(input).toHaveAttribute("aria-label", "Movie Title");
    });

    it('uses the label if aria-label is not provided', () => {
        render(<InputField id="movieTitle"
                           label="Title"
                           type="text"
                           name="movieTitle"
                           placeholder="Movie Title"
                           defaultValue="Joker"/>
        );

        const input = screen.getByRole("textbox");

        expect(input).toHaveAttribute("aria-label", "Title");
    })
})
