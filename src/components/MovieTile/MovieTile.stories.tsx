import { Meta, StoryObj } from "@storybook/react";
import MovieTile from "./MovieTile";
import {fn} from "@storybook/test";
import {mockMoviesData} from "../../mocks/mockMoviesData";


const meta = {
    component: MovieTile,
    title: 'MovieTile',
    tags: ['autodocs'],
    //👇 Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
    args: {},
} satisfies Meta<typeof MovieTile>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        movieDetails: mockMoviesData,
        onClick: fn(),
        handleEdit: fn(),
        handleDelete: fn()
    },
};
