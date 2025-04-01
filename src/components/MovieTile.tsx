import styles from '../styles/MovieTile.module.css';
import React from "react";
import {MovieDetailsData} from "../types/MovieDetailsData";

interface MovieTileProps {
    movieDetails: MovieDetailsData,
    onClick: (movieName:string ) => void;
}

const MovieTile: React.FC<MovieTileProps> = ({movieDetails, onClick}) => {
    const { imageUrl, movieName, releaseYear, relevantGenres } = movieDetails;
    return (
        <div className={styles.movieTile}>
            <img src={imageUrl} alt={movieName} onClick={() => onClick(movieName)} />
            <span className={styles.movieTitleAndYear}>
                <h2 className={styles.title}>{movieName}</h2>
                <span className={styles.year}>{releaseYear}</span>
            </span>
            <p className={styles.genres}>
                {relevantGenres.map(genre => (
                    <span>{genre} </span>
                ))}
            </p>
        </div>
    )
}

export default MovieTile;
