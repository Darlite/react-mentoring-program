import React from "react";
import styles from "../DeleteDialog/DeleteDialog.module.css";

const DeleteDialog: React.FC = () => {
    return (
        <>
            <p className={styles.deleteMessage}>
                Are you sure you want to delete this movie?
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
