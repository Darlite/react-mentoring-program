import SearchForm from "../SearchForm";
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as sea from "node:sea";

test('has initial value', () => {
    const initialSearchText = "What do you want to watch?";
    render(<SearchForm initialSearch={initialSearchText}
                       onSearch={() => {
                       }}/>);
    const placeholder = screen.getByPlaceholderText(initialSearchText);
    expect(placeholder).toBeInTheDocument();
});

test('check onSubmit function call by button click', () => {
    const onSearch = jest.fn();
    const searchQuery = "Joker";
    render(<SearchForm initialSearch={""}
                       onSearch={onSearch}/>);
    userEvent.type(screen.getByRole("textbox"), searchQuery);
    userEvent.click(screen.getByRole("button"));
    expect(onSearch).toHaveBeenCalledWith(searchQuery);
});

test('check onSubmit function call by Enter key', () => {
    const onSearch = jest.fn();
    const searchQuery = "Joker";
    render(<SearchForm initialSearch={""}
                       onSearch={onSearch}/>);
    userEvent.type(screen.getByRole("textbox"), searchQuery);
    userEvent.type(screen.getByRole("textbox"), `{enter}`);
    expect(onSearch).toHaveBeenCalledWith(searchQuery);
});
