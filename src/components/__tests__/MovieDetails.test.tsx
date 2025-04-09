import {render} from "@testing-library/react";
import MovieDetails from "../MovieDetails/MovieDetails";
import {moviesData} from "../../mocks/mockMovieData";

describe('MovieDetails', () => {
    it("renders correctly", () => {
        const { container } = render(<MovieDetails movieDetails={moviesData} />);
        expect(container).toMatchSnapshot();
    });
})
