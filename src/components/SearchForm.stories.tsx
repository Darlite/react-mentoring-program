import { Meta, StoryObj } from "@storybook/react";
import SearchForm from "./SearchForm";
import {fn} from "@storybook/test";


const meta = {
    component: SearchForm,
    title: 'SearchForm',
    tags: ['autodocs'],
    //👇 Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
    args: {},
} satisfies Meta<typeof SearchForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        initialSearch: "What do you want to watch?",
        onSearch: fn(),
    },
};
