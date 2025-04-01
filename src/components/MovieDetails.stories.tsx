import { Meta, StoryObj } from "@storybook/react";
import MovieDetails from "./MovieDetails";


const meta = {
    component: MovieDetails,
    title: 'MovieDetails',
    tags: ['autodocs'],
    //👇 Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
    args: {},
} satisfies Meta<typeof MovieDetails>;

export default meta;

type Story = StoryObj<typeof meta>;

const moviesData = {
    imageUrl: "images/Pulp_Fiction.png",
    movieName: "Pulp Fiction",
    releaseYear: 1994,
    relevantGenres: ["Crime", "Thriller"],
    duration: "2h 34m",
    rating: 8.9,
    description: "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra",
}

export const Default: Story = {
    args: {
        movieDetails: moviesData,
    },
};
