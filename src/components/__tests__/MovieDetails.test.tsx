import {render} from "@testing-library/react";
import MovieDetails from "../MovieDetails/MovieDetails";
import {mockMoviesData} from "../../mocks/mockMoviesData";

describe('MovieDetails', () => {
    it("renders correctly", () => {
        const { container } = render(<MovieDetails movieDetails={mockMoviesData} />);
        expect(container).toMatchSnapshot();
    });
})
