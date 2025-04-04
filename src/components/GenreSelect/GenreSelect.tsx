import styles from '../../styles/GenreSelectStyles.module.css';
import React from "react";

interface GenreSelectProps {
    genreNames: string[];
    selectedGenre: string;
    onSelect: (genreName: string) => void;
}

const GenreSelect: React.FC<GenreSelectProps> = ({genreNames, selectedGenre, onSelect}) => {
    return (
        <div className={styles.GenreSelect}>
            {genreNames.map((genreName, i) => {
                return (<span role="button"
                              className={`${styles.GenreSelectItem} ${genreName === selectedGenre ? styles.selected : ""}`}
                              key={i}
                              onClick={() => onSelect(genreName)}>
                    {genreName}
                </span>)
            })}
        </div>);
}

export default GenreSelect;
