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
    return (
        <>
            {
                currentDialog === DialogType.EditMovie ? (
                    <MovieForm initialMovieInfo={selectedMovie}
                               handleSubmit={handleSubmit}/>
                ) :
                currentDialog === DialogType.AddMovie ? (
                    <MovieForm handleSubmit={handleSubmit}/>
                ) : (
                    <DeleteDialog movieToDelete={selectedMovie} />
                )
            }
        </>
    )
}

export default ModalContent;
