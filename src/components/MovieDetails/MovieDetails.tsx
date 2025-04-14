import styles from './MovieDetails.module.css';
import React from "react";
import {MovieDetailsData} from "../../types/MovieDetailsData";

interface MovieDetailsProps {
    movieDetails: MovieDetailsData;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({movieDetails}) => {
    const {imageUrl, title, releaseDate, genres, runtime, rating, description} = movieDetails;
    return (
        <div className={styles.movieDetails}>
            <img src={imageUrl} alt={title}/>
            <div className={styles.movieInfo}>
                <h1 className={styles.movieTitle}>{<title></title>}</h1>
                <span className={styles.rating}>{rating}</span>
                <p className={styles.genres}>
                    {genres.map(genre => (
                        <span key={genre}>{genre} </span>
                    ))}
                </p>
                <span className={styles.releaseDate}>{releaseDate}</span>
                <span className={styles.runtime}>{runtime}</span>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    )
}

export default MovieDetails;
