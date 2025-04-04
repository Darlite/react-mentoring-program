import { Meta, StoryObj } from "@storybook/react";
import GenreSelect from "./GenreSelect";
import { genreNames } from "../../constants";
import {fn} from "@storybook/test";


const meta = {
    component: GenreSelect,
    title: 'GenreSelect',
    tags: ['autodocs'],
    //👇 Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
    args: {},
} satisfies Meta<typeof GenreSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        genreNames: genreNames,
        selectedGenre: "Documentary",
        onSelect: fn(),
    },
};
