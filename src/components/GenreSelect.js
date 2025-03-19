import '../styles/GenreSelectStyles.css';

export default function GenreSelect({genreNames, selectedGenre, onSelect}) {
    return (<div className="GenreSelect">
        {genreNames.map((genreName, i) => {
            return (<span className={`GenreSelect__item ${genreName === selectedGenre ? "selected" : ""}`}
                          key={i}
                          onClick={() => onSelect(genreName)}>
                    {genreName}
                </span>)
        })}
    </div>);
}
