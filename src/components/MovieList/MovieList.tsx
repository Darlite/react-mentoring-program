import styles from "./MovieList.module.css";
import React from "react";
import {MovieDetailsData} from "../../types/MovieDetailsData";
import MovieTile from "../MovieTile/MovieTile";

interface MovieListProps {
    movieList: MovieDetailsData[];
    handleTileClick: (movie: MovieDetailsData) => void;
    handleEditMovie: (movie: MovieDetailsData) => void;
    handleDeleteMovie: (movie: MovieDetailsData) => void;
}

const MovieList: React.FC<MovieListProps> = ({movieList, handleTileClick, handleEditMovie, handleDeleteMovie}) => {
    const handleEdit = (movie: MovieDetailsData) => {
        handleEditMovie(movie)
    }

    const handleDelete = (movie: MovieDetailsData) => {
        handleDeleteMovie(movie)
    }

    return (
        <div data-testid="movie-list"
             className={styles.movieList}>
            {movieList.map((movie) => (
                <MovieTile key={movie.id}
                           movieDetails={movie}
                           onClick={handleTileClick}
                           handleEdit={() => handleEdit(movie)}
                           handleDelete={() => handleDelete(movie)}
                />
            ))}
        </div>)
}

export default MovieList;
