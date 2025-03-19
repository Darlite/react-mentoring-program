import '../styles/GenreSelectStyles.css';
import React from "react";

interface GenreSelectProps {
    genreNames: string[];
    selectedGenre: string;
    onSelect: (genreName: string) => void;
}

const GenreSelect: React.FC<GenreSelectProps> = ({genreNames, selectedGenre, onSelect}) => {
    return (
        <div className="GenreSelect">
            {genreNames.map((genreName, i) => {
                return (<span className={`GenreSelect__item ${genreName === selectedGenre ? "selected" : ""}`}
                              key={i}
                              onClick={() => onSelect(genreName)}>
                    {genreName}
                </span>)
            })}
        </div>);
}

export default GenreSelect;
