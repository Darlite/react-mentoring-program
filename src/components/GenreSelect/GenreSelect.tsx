import {GenreType} from "../../constants/GenreType";
import styles from "../GenreSelect/GenreSelect.module.css";
import React from "react";

interface GenreSelectProps {
    defaultOptions?: GenreType[],
}

const GenreSelect: React.FC<GenreSelectProps> = ({
    defaultOptions
}) => {
    return (
        <div className={styles.labelAndInputContainer}>
            <label className={styles.inputLabel}
                   htmlFor="genres">Genre</label>
            <select className={styles.input}
                    id="genres"
                    name="genres"
                    aria-label="Movie Genres"
                    defaultValue={defaultOptions || [""]}
                    multiple={true}
                    required={true}
            >
                {
                    Object.values(GenreType).map((genre) => (
                        <option key={genre} value={genre}>
                            {genre}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}

export default GenreSelect;
