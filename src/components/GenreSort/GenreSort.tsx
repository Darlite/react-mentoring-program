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
                              className={`${styles.GenreSelectItem} ${genreName === selectedGenre ? styles.selected : ""}`}
                              key={i}
                              onClick={() => onSelect(genreName)}>
                    {genreName}
                </span>)
            })}
        </div>);
}

export default GenreSort;
