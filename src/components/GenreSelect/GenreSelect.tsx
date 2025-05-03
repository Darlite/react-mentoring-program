import {GenreType} from "../../constants/GenreType";
import styles from "../GenreSelect/GenreSelect.module.css";
import React from "react";

interface GenreSelectProps {
    defaultOptions?: GenreType[],
    register?: any,
    errorMessage?: string,
}

const GenreSelect: React.FC<GenreSelectProps> = ({
                                                     defaultOptions, register, errorMessage
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
                    {...(register ? register("genres") : {})}
            >
                {
                    Object.values(GenreType).map((genre) => (
                        <option key={genre} value={genre}>
                            {genre}
                        </option>
                    ))
                }
            </select>
            {errorMessage && <span className={styles.errorMessage}>{errorMessage}</span>}
        </div>
    )
}

export default GenreSelect;
