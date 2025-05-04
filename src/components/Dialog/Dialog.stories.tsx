import {Meta, StoryObj} from "@storybook/react";
import {fn} from "@storybook/test";
import Dialog from "./Dialog";
import MovieForm from "../MovieForm/MovieForm";
import React from "react";
import {mockMoviesData} from "../../mocks/mockMoviesData";
import {DialogType} from "../../constants/DialogType";

const meta = {
    component: Dialog,
    title: 'Dialog',
    tags: ['autodocs'],
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AddMovie: Story = {
    args: {
        dialogTitle: DialogType.AddMovie,
        content: <MovieForm onMovieSubmit={fn()}/>,
        handleToggleDialog: fn(),
        showDialog: true,
    },
};

export const EditMovie: Story = {
    args: {
        dialogTitle: DialogType.EditMovie,
        content: <MovieForm initialMovieInfo={mockMoviesData} onMovieSubmit={fn()}/>,
        handleToggleDialog: fn(),
        showDialog: true,
    },
};

export const DeleteMovie: Story = {
    args: {
        dialogTitle: DialogType.DeleteMovie,
        content: <MovieForm initialMovieInfo={mockMoviesData}
                            onMovieSubmit={fn()} /> ,
        handleToggleDialog: fn(),
        showDialog: true,
    },
};
