import { Meta, StoryObj } from "@storybook/react";
import GenreSort from "./GenreSort";
import { GenreNames } from "../../constants/GenreNames";
import {fn} from "@storybook/test";


const meta = {
    component: GenreSort,
    title: 'GenreSort',
    tags: ['autodocs'],
    //👇 Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
    args: {},
} satisfies Meta<typeof GenreSort>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        genreNames: GenreNames,
        selectedGenre: "Documentary",
        onSelect: fn(),
    },
};
