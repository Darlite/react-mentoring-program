import styles from './App.module.css';
import Counter from "./components/Counter";
import SearchForm from "./components/SearchForm";
import GenreSelect from "./components/GenreSelect";
import {genreNames} from "./constants";
import {useState} from "react";
import MovieTile from "./components/MovieTile";
import MovieDetails from "./components/MovieDetails";
import SortControl from "./components/SortControl";
import {MovieDetailsData} from "./types/MovieDetailsData";

export default function App() {
    const [selectedGenre, setSelectedGenre] = useState<string>("Documentary");
    const [selectedSortControl, setSelectedSortControl] = useState<string>("Release Date");
    const [selectedMovie, setSelectedMovie] = useState<MovieDetailsData | null>(null);

    function handleSearch(searchInput: string) {
        console.log("Input from the search bar: ", searchInput);
    }

    function handleGenreSelect(genre: string) {
        setSelectedGenre(genre);
    }

    function handleTileClick(movieDetails: MovieDetailsData) {
        console.log("Clicked on: ", movieDetails);
        setSelectedMovie(movieDetails);
    }

    function handleSortControlChange(option: string) {
        setSelectedSortControl(option);
    }

    const moviesDataList = [
        {
            id: 1,
            imageUrl: "images/Pulp_Fiction.png",
            movieName: "Pulp Fiction",
            releaseYear: 1994,
            relevantGenres: ["Crime", "Thriller"],
            duration: "2h 34m",
            rating: 8.9,
            description: "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra",
        },
        {
            id: 2,
            imageUrl: "images/Bohemian_Rhapsody.png",
            movieName: "Bohemian Rhapsody",
            releaseYear: 2018,
            relevantGenres: ["Musical", "Documentary"],
            duration: "2h 15m",
            rating: 8.5,
            description: "With his impeccable vocal abilities, Freddie Mercury and his rock band, Queen, achieve superstardom. However, amidst his skyrocketing success, he grapples with his ego, sexuality and a fatal illness.",
        },
        {
            id: 3,
            imageUrl: "images/Kill_Bill_Volume_2.png",
            movieName: "Kill Bill: Vol. 2",
            releaseYear: 2004,
            relevantGenres: ["Action", "Thriller"],
            duration: "2h 17m",
            rating: 8.9,
            description: "A pregnant woman, codenamed the Bride, sets out on a journey to kill her ex-boss, Bill, and targets his brother, Budd, and Elle Driver, the only two survivors of the Deadly Vipers Assassination Squad.",
        },
    ]

    return (
        <div className={styles.app}>
            <Counter initialCount={3}/>
            {selectedMovie ? <MovieDetails movieDetails={selectedMovie}/> :
                <SearchForm initialSearch={"What do you want to watch?"}
                            onSearch={handleSearch}/>}
            <GenreSelect genreNames={genreNames}
                         selectedGenre={selectedGenre}
                         onSelect={handleGenreSelect}/>
            <SortControl currentSelection={selectedSortControl}
                         onSelect={handleSortControlChange}/>
            <div className={styles.movieList}>
                {moviesDataList.map((movie) => (
                    <MovieTile key={movie.id}
                               movieDetails={movie}
                               onClick={handleTileClick}
                    />
                ))}
            </div>
        </div>
    );
}
