import styles from './App.module.css';
import Counter from "./components/Counter";
import SearchForm from "./components/SearchForm";
import GenreSelect from "./components/GenreSelect";
import {genreNames} from "./constants";
import {useState} from "react";
import MovieTile from "./components/MovieTile";

export default function App() {
    const [selectedGenre, setSelectedGenre] = useState<string>("Documentary");

    function handleSearch(searchInput: string) {
        console.log("Input from the search bar: ", searchInput);
    }

    function handleGenreSelect(genre: string) {
        setSelectedGenre(genre);
    }

    return (
        <div className={styles.app}>
            <Counter initialCount={3}/>
            <SearchForm initialSearch={"What do you want to watch?"}
                        onSearch={handleSearch}/>
            <GenreSelect genreNames={genreNames}
                         selectedGenre={selectedGenre}
                         onSelect={handleGenreSelect}/>
            <MovieTile imageUrl={"images/Pulp_Fiction.png"}
                       movieName={"Pulp Fiction"}
                       releaseYear={1994}
                       relevantGenres={["Crime", "Thriller"]}
                       onClick={() => {}}
            />
        </div>
    );
}
