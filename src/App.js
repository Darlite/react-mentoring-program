import './App.css';
import Counter from "./components/Counter";
import SearchForm from "./components/SearchForm";

export default function App() {
    function handleSearch(e) {
        e.preventDefault();
        console.log(e.target[0].value);
    }

    return (
        <div className="App">
            <Counter initialCount={3}/>
            <SearchForm initialSearch={"What do you want to watch?"} onSearch={handleSearch} />
        </div>
    );
}
