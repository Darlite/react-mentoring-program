import {Meta, StoryObj} from "@storybook/react";
import {fn} from "@storybook/test";
import Dialog from "./Dialog";
import MovieForm from "../MovieForm/MovieForm";
import React from "react";
import {moviesData} from "../../mocks/mockMovieData";

const meta = {
    component: Dialog,
    title: 'Dialog',
    tags: ['autodocs'],
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof meta>;

const movieForm  = <MovieForm handleSubmit={() => {}}/>;

export const AddMovie: Story = {
    args: {
        dialogTitle: "Add movie",
        content: <MovieForm handleSubmit={fn()}/>,
        handleToggleDialog: fn(),
    },
};

export const EditMovie: Story = {
    args: {
        dialogTitle: "Edit movie",
        content: <MovieForm initialMovieInfo={moviesData} handleSubmit={fn()}/>,
        handleToggleDialog: fn(),
    },
};

export const DeleteMovie: Story = {
    args: {
        dialogTitle: "Delete movie",
        content: "",
        handleToggleDialog: fn(),
    },
};
