import SearchForm from "../../components/SearchForm/SearchForm";
import '@testing-library/jest-dom';
import {render, screen} from "@testing-library/react";
import {
    createMemoryRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";

describe('SearchForm component', () => {
    it('has initial value', () => {
        const initialSearchText = "What do you want to watch?";
        const router = createMemoryRouter(
            createRoutesFromElements(
                <Route path="/" element={<SearchForm initialSearch={initialSearchText}/>}/>
            ),
            {initialEntries: ["/"]}
        );

        render(<RouterProvider router={router}/>);
        const placeholder = screen.getByPlaceholderText(initialSearchText);
        expect(placeholder).toBeInTheDocument();
    });
})
