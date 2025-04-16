import styles from "./MovieList.module.css";
import React from "react";
import {MovieDetailsData} from "../../types/MovieDetailsData";
import MovieTile from "../MovieTile/MovieTile";
import {DialogType} from "../../constants/DialogType";

interface MovieListProps {
    movieList: MovieDetailsData[];
    handleTileClick: (movie: MovieDetailsData) => void;
    handleEditMovie: (dialogType: DialogType, movie: MovieDetailsData) => void;
    handleDeleteMovie: (dialogType: DialogType, movie: MovieDetailsData) => void;
}

const MovieList: React.FC<MovieListProps> = ({movieList, handleTileClick, handleEditMovie, handleDeleteMovie}) => {

    return (
        <div className={styles.movieList}>
            {movieList.map((movie) => (
                <MovieTile key={movie.id}
                       movieDetails={movie}
                       onClick={handleTileClick}
                       handleEdit={() => handleEditMovie(DialogType.EditMovie, movie)}
                       handleDelete={() => handleDeleteMovie(DialogType.DeleteMovie, movie)}
                />
            ))}
        </div>)
}

export default MovieList;
