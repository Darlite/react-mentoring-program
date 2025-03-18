import './App.css';
import Counter from "./components/Counter";
import SearchForm from "./components/SearchForm";
import GenreSelect from "./components/GenreSelect";

export default function App() {
    function handleSearch(searchInput) {
        console.log("Input from the search bar: ", searchInput);
    }

    const genreNames = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];

    const selectedGenre = 'Documentary';

    function handleGenreSelect(genre) {
        console.log("Selected genre: ", genre)
    }

    return (
        <div className="App">
            <Counter initialCount={3}/>
            <SearchForm initialSearch={"What do you want to watch?"} onSearch={handleSearch}/>
            <GenreSelect genreNames={genreNames}
                         selectedGenre={selectedGenre}
                         onSelect={handleGenreSelect} />
        </div>
    );
}
