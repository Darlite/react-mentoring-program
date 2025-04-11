import {Meta, StoryObj} from "@storybook/react";
import GenreSelect from "./GenreSelect";
import {GenreType} from "../../constants/GenreType";


const meta = {
    component: GenreSelect,
    title: 'GenreSelect',
    tags: ['autodocs'],
    //👇 Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
    args: {
        defaultOptions: [GenreType.Action, GenreType.Documentary],
    },
} satisfies Meta<typeof GenreSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ActionAndDocumentarySelected: Story = {
    args: {
        defaultOptions: [GenreType.Action, GenreType.Documentary],
    },
};
