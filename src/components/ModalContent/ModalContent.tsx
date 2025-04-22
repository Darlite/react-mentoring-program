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
    switch (currentDialog) {
        case (DialogType.AddMovie) :
            return <MovieForm handleSubmit={handleSubmit} />;
        case (DialogType.EditMovie) :
            return selectedMovie ? (<MovieForm initialMovieInfo={selectedMovie} handleSubmit={handleSubmit} />
            ) : null;
        case (DialogType.DeleteMovie) :
            return selectedMovie ? (<DeleteDialog movieToDelete={selectedMovie} />
            ) : null;
        default:
            return null;
    }
}

export default ModalContent;
