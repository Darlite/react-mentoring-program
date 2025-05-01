import styles from './MovieDetails.module.css';
import React from "react";
import {MovieDetailsData} from "../../types/MovieDetailsData";
import placeholderImage from "../../assets/images/placeholderPoster.jpg";
import formatRuntime from "../../utils/formatRuntime";

interface MovieDetailsProps {
    movieDetails: MovieDetailsData;
    handleBackToSearch: () => void;
}

const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = placeholderImage;
    e.currentTarget.onerror = null;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({movieDetails, handleBackToSearch}) => {
    const {poster_path, title, release_date, genres, runtime, vote_average, overview} = movieDetails;

    return (
        <div className={styles.movieDetails} data-testid="movie-details">
            <img className={styles.movieDetailsImage}
                 src={!poster_path ? placeholderImage : poster_path}
                 alt={title}
                 onError={handleImageError}
            />
            <div className={styles.movieInfo}>
                <h1 className={styles.movieTitle}
                    data-cy="movie-details-title">{title}</h1>
                <span className={styles.rating}
                      data-cy="movie-details-rating">{vote_average}</span>
                <p className={styles.genres} data-cy="movie-details-genres">
                    {genres.map(genre => (
                        <span key={genre}>{genre} </span>
                    ))}
                </p>
                <span className={styles.releaseDate}
                      data-cy="movie-details-release-date">{release_date}</span>
                <span className={styles.runtime}
                      data-cy="movie-details-runtime">{formatRuntime(runtime)}</span>
                <p className={styles.overview}
                   data-cy="movie-details-overview">{overview}</p>
                <span className={styles.searchButton}
                      data-cy="movie-details-back-button"
                      role="button"
                      onClick={handleBackToSearch}>Back to the search</span>
            </div>
        </div>
    )
}

export default MovieDetails;
