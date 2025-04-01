import { Meta, StoryObj } from "@storybook/react";
import SortControl from "./SortControl";
import {fn} from "@storybook/test";


const meta = {
    component: SortControl,
    title: 'SortControl',
    tags: ['autodocs'],
    //👇 Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
    args: {},
} satisfies Meta<typeof SortControl>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        currentSelection: "Release Date",
        onSelect: fn(),
    },
};
