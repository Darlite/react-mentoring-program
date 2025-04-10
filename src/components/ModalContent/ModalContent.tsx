import React from "react";
import {DialogType} from "../../constants/DialogType";
import MovieForm from "../MovieForm/MovieForm";
import {MovieDetailsData} from "../../types/MovieDetailsData";
import styles from "../ModalContent/ModalContent.module.css";

interface ModalContentProps {
    currentDialog: string,
    selectedMovie?: MovieDetailsData | null,
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
                    <>
                        <p className={styles.deleteMessage}>
                            Are you sure you want to delete this movie?
                        </p>
                        <button className={styles.confirmDeleteMovieButton}>
                            Confirm
                        </button>
                    </>
                )
            }
        </>
    )
}

export default ModalContent;
