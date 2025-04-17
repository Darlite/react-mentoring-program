import React from "react";
import styles from "../AddMovieButton/AddMovieButton.module.css";
import {DialogType} from "../../constants/DialogType";

interface AddMovieButtonProps {
    handleShowDialog: (dialogType: DialogType) => void;
}

const AddMovieButton: React.FC<AddMovieButtonProps> = ({ handleShowDialog }) => {
    return (
        <span className={styles.addMovieButton}
              id="addMovieButton"
              role="button"
              onClick={() => handleShowDialog(DialogType.AddMovie)}
        >
            + Add movie
        </span>
    )
}

export default AddMovieButton;