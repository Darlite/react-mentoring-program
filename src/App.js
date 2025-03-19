import './App.css';
import Counter from "./components/Counter";
import SearchForm from "./components/SearchForm";
import GenreSelect from "./components/GenreSelect";
import {genreNames} from "./constants";
import {useState} from "react";

export default function App() {
    const [selectedGenre, setSelectedGenre] = useState("Documentary");

    function handleSearch(searchInput) {
        console.log("Input from the search bar: ", searchInput);
    }

    function handleGenreSelect(genre) {
        setSelectedGenre(genre);
    }

    return (
        <div className="App">
            <Counter initialCount={3}/>
            <SearchForm initialSearch={"What do you want to watch?"} onSearch={handleSearch}/>
            <GenreSelect genreNames={genreNames}
                         selectedGenre={selectedGenre}
                         onSelect={handleGenreSelect}/>
        </div>
    );
}
