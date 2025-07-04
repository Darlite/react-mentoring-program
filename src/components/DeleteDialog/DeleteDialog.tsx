import React from "react";
import styles from "../DeleteDialog/DeleteDialog.module.css";
import {MovieDetailsData} from "../../types/MovieDetailsData";

interface DeleteDialogProps {
    movieToDelete: MovieDetailsData,
}

const DeleteDialog: React.FC<DeleteDialogProps> = ({ movieToDelete }) => {
    return (
        <>
            <p className={styles.deleteMessage}>
                Are you sure you want to delete
                <span className={styles.movieToDeleteTitle} aria-label="movie title"> {movieToDelete.title} </span>
                movie?
            </p>
            <button className={styles.confirmDeleteMovieButton}
                    aria-label="Confirm"
            >
                Confirm
            </button>
        </>
    )
}

export default DeleteDialog;
