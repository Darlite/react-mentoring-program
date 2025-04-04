import Counter from './Counter';
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    component: Counter,
    title: 'Counter',
    tags: ['autodocs'],
    //👇 Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
    args: {},
} satisfies Meta<typeof Counter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        initialCount: 3,
    },
};
