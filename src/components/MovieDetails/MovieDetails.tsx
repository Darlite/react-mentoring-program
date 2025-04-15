import styles from './MovieDetails.module.css';
import React from "react";
import {MovieDetailsData} from "../../types/MovieDetailsData";
import placeholderImage from "../../assets/images/placeholderPoster.jpg";
import formatRuntime from "../../utils/formatRuntime";

interface MovieDetailsProps {
    movieDetails: MovieDetailsData;
    handleBackToSearch: () => void;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({movieDetails, handleBackToSearch}) => {
    const {poster_path, title, release_date, genres, runtime, vote_average, overview} = movieDetails;
    return (
        <div className={styles.movieDetails}>
            <img className={styles.movieDetailsImage}
                 src={poster_path}
                 alt={title}
                 onError={(e) => {
                     e.currentTarget.src = placeholderImage;
                     e.currentTarget.onerror = null;
                 }
                }
            />
            <div className={styles.movieInfo}>
                <h1 className={styles.movieTitle}>{title}</h1>
                <span className={styles.rating}>{vote_average}</span>
                <p className={styles.genres}>
                    {genres.map(genre => (
                        <span key={genre}>{genre} </span>
                    ))}
                </p>
                <span className={styles.releaseDate}>{release_date}</span>
                <span className={styles.runtime}>{formatRuntime(runtime)}</span>
                <p className={styles.overview}>{overview}</p>
                <span className={styles.searchButton}
                      role="button"
                      onClick={handleBackToSearch}>Back to the search</span>
            </div>
        </div>
    )
}

export default MovieDetails;
