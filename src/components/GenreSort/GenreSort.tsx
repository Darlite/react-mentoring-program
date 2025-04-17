import styles from './GenreSort.module.css';
import React from "react";

interface GenreSortProps {
    genreNames: string[];
    selectedGenre: string;
    onSelect: (genreName: string) => void;
}

const GenreSort: React.FC<GenreSortProps> = ({genreNames, selectedGenre, onSelect}) => {
    return (
        <div className={styles.GenreSelect}>
            {genreNames.map((genreName, i) => {
                return (<span role="button"
                              className={`${styles.GenreSelectItem} ${(genreName === selectedGenre) || (selectedGenre.length === 0 && genreName === "All") ? styles.selected : ""}`}
                              key={i}
                              aria-label={genreName}
                              onClick={() => onSelect(genreName)}>
                    {genreName || "All"}
                </span>)
            })}
        </div>);
}

export default GenreSort;
