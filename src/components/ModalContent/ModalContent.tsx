import React from "react";
import {DialogType} from "../../constants/DialogType";
import MovieForm from "../MovieForm/MovieForm";
import {MovieDetailsData} from "../../types/MovieDetailsData";
import DeleteDialog from "../DeleteDialog/DeleteDialog";

interface ModalContentProps {
    currentDialog: string,
    selectedMovie: MovieDetailsData | null,
    handleSubmit: (MovieData: MovieDetailsData) => void,
}

const ModalContent: React.FC<ModalContentProps> = ({ currentDialog, selectedMovie, handleSubmit }) => {
        if (currentDialog === DialogType.EditMovie && selectedMovie) {
            return <MovieForm initialMovieInfo={selectedMovie} handleSubmit={handleSubmit} />;
        }

        if (currentDialog === DialogType.AddMovie) {
            return <MovieForm handleSubmit={handleSubmit} />
        }

        if (currentDialog === DialogType.DeleteMovie && selectedMovie) {
            return <DeleteDialog movieToDelete={selectedMovie} />;
        }

        return null
}

export default ModalContent;
