import styles from './MovieDetails.module.css';
import React from "react";
import {MovieDetailsData} from "../../types/MovieDetailsData";

interface MovieDetailsProps {
    movieDetails: MovieDetailsData;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({movieDetails}) => {
    const {imageUrl, movieName, releaseYear, relevantGenres, duration, rating, description} = movieDetails;
    return (
        <div className={styles.movieDetails}>
            <img src={imageUrl} alt={movieName}/>
            <div className={styles.movieInfo}>
                <h1 className={styles.movieTitle}>{movieName}</h1>
                <span className={styles.rating}>{rating}</span>
                <p className={styles.genres}>
                    {relevantGenres.map(genre => (
                        <span key={genre}>{genre} </span>
                    ))}
                </p>
                <span className={styles.releaseYear}>{releaseYear}</span>
                <span className={styles.duration}>{duration}</span>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    )
}

export default MovieDetails;
