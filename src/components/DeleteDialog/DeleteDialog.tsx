import React from "react";
import styles from "../DeleteDialog/DeleteDialog.module.css";
import {MovieDetailsData} from "../../types/MovieDetailsData";

interface DeleteDialogProps {
    movieToDelete: MovieDetailsData,
    onDelete: (id: number) => void,
}

const DeleteDialog: React.FC<DeleteDialogProps> = ({ movieToDelete, onDelete }) => {
    function handleOnClick(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        onDelete(movieToDelete.id);
    }

    return (
        <>
            <p className={styles.deleteMessage}>
                Are you sure you want to delete
                <span className={styles.movieToDeleteTitle} aria-label="movie title"> {movieToDelete.title} </span>
                movie?
            </p>
            <button className={styles.confirmDeleteMovieButton}
                    aria-label="Confirm"
                    onClick={handleOnClick}
            >
                Confirm
            </button>
        </>
    )
}

export default DeleteDialog;
