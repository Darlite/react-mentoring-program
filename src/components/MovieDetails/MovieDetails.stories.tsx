import { Meta, StoryObj } from "@storybook/react";
import MovieDetails from "./MovieDetails";
import {moviesData} from "../../mocks/mockMovieData";


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

export const Default: Story = {
    args: {
        movieDetails: moviesData,
    },
};
