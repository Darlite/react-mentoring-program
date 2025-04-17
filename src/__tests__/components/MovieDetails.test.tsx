import {fireEvent, render, screen} from "@testing-library/react";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import {mockMoviesData} from "../../mocks/mockMoviesData";
import placeholderImage from "../../assets/images/placeholderPoster.jpg";
import React from "react";

describe('MovieDetails', () => {
    it("renders correctly", () => {
        const { container } = render(<MovieDetails movieDetails={mockMoviesData}
                                                   handleBackToSearch={jest.fn} />);
        expect(container).toMatchSnapshot();
    });

    it("renders with fallback image on error", () => {
        render(<MovieDetails movieDetails={mockMoviesData}
                             handleBackToSearch={jest.fn} />);

        const image = screen.getByAltText(mockMoviesData.title);
        expect(image).toHaveAttribute("src", mockMoviesData.poster_path);
        fireEvent.error(image);
        expect(image).toHaveAttribute("src", placeholderImage);
    });

    it("renders with fallback image on null", () => {
        const mockMoviesDataWithNullPoster = {
            ...mockMoviesData,
            poster_path: null,
        }
        render(<MovieDetails
            movieDetails={mockMoviesDataWithNullPoster}
            handleBackToSearch={jest.fn} />);

        const image = screen.getByAltText(mockMoviesData.title);
        expect(image).toHaveAttribute("src", placeholderImage);
    });
});
