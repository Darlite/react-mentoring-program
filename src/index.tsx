import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import MovieDetailsWrapper from "./components/MovieDetails/MovieDetailsWrapper";
import {movieDetailsLoader} from "./loaders/movieDetailsLoader";
import SearchForm from "./components/SearchForm/SearchForm";
import AddMovieForm from "./components/AddMovieForm/AddMovieForm";
import EditMovieForm from "./components/EditMovieForm/EditMovieForm";
import DeleteMovieForm from "./components/DeleteMovieForm/DeleteMovieForm";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route path="/" element={<SearchForm/>}>
                <Route path="/new" element={<AddMovieForm/>}/>
            </Route>
            <Route path="movies/:movieId"
                   element={<MovieDetailsWrapper />}
                   loader={movieDetailsLoader}
                   errorElement={<p>Movie has not been found</p>}>
                <Route path="edit"
                       element={<EditMovieForm/>}
                       loader={movieDetailsLoader}/>
                <Route path="delete"
                       element={<DeleteMovieForm/>}
                       loader={movieDetailsLoader}/>
            </Route>
        </Route>
    )
)

const rootElement = document.getElementById("root");
if (!rootElement) {
    throw new Error("No root element found");
}
const root = ReactDOM.createRoot(rootElement);

root.render(
    <RouterProvider router={router}/>
);
