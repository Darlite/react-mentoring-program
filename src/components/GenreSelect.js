import '../styles/GenreSelectStyles.css';

export default function GenreSelect({genreNames, selectedGenre, onSelect}) {
    return (<div className="GenreSelect">
        {genreNames.map((genreName, i) => {
            if (genreName === selectedGenre) {
                return (<span className={"GenreSelect__item selected"}
                              key={i}
                              onClick={() => onSelect(genreName)}>
                    {genreName}
                </span>)
            } else {
                return (<span className={"GenreSelect__item"}
                              key={i}
                              onClick={() => onSelect(genreName)}>
                    {genreName}
                </span>)
            }
        })}
    </div>);
}
