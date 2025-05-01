import {Meta, StoryObj} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import SortControl from "./SortControl";
import {fn} from "@storybook/test";

const meta = {
    component: SortControl,
    title: 'SortControl',
    tags: ['autodocs'],
    argTypes: {
        currentSelection: {
            control: {type: "select"},
            options: ["Release Date", "Title"],
        }
    },
    args: {
        currentSelection: "Release Date",
    }
} satisfies Meta<typeof SortControl>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        currentSelection: "Release Date",
        onSelect: action("onSelect"),
        sortOrder: "asc",
        onSortOrderChange: fn(),
    },
};
