import {Meta, StoryObj} from "@storybook/react";
import {fn} from "@storybook/test";
import Dialog from "./Dialog";
import MovieForm from "../MovieForm/MovieForm";
import React from "react";
import {moviesData} from "../../mocks/mockMovieData";
import {DialogType} from "../../constants/DialogType";
import ModalContent from "../ModalContent/ModalContent";

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
        content: <MovieForm handleSubmit={fn()}/>,
        handleToggleDialog: fn(),
    },
};

export const EditMovie: Story = {
    args: {
        dialogTitle: DialogType.EditMovie,
        content: <MovieForm initialMovieInfo={moviesData} handleSubmit={fn()}/>,
        handleToggleDialog: fn(),
    },
};

export const DeleteMovie: Story = {
    args: {
        dialogTitle: DialogType.DeleteMovie,
        content: <ModalContent currentDialog={DialogType.DeleteMovie}
                               handleSubmit={fn()} /> ,
        handleToggleDialog: fn(),
    },
};
