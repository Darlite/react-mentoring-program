import React from "react";
import {DialogType} from "../../constants/DialogType";
import MovieForm from "../MovieForm/MovieForm";
import {MovieDetailsData} from "../../types/MovieDetailsData";
import DeleteDialog from "../DeleteDialog/DeleteDialog";
import {MovieDetailsPost} from "../../types/MovieDetailsPost";

interface ModalContentProps {
    currentDialog: string,
    selectedMovie: MovieDetailsData | null,
    handleSubmit: (MovieData: MovieDetailsPost) => void,
}

const ModalContent: React.FC<ModalContentProps> = ({ currentDialog, selectedMovie, handleSubmit }) => {
    switch (currentDialog) {
        case (DialogType.AddMovie) :
            return <MovieForm onMovieSubmit={handleSubmit} />;
        case (DialogType.EditMovie) :
            return selectedMovie ? (<MovieForm initialMovieInfo={selectedMovie} onMovieSubmit={handleSubmit} />
            ) : null;
        case (DialogType.DeleteMovie) :
            return selectedMovie ? (<DeleteDialog movieToDelete={selectedMovie} />
            ) : null;
        default:
            return null;
    }
}

export default ModalContent;
