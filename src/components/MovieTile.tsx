import styles from '../styles/MovieTile.module.css';
import React from "react";

interface MovieTileProps {
    imageUrl: string;
    movieName: string;
    releaseYear: number;
    relevantGenres: string[];
    onClick?: () => void;
}

const MovieTile: React.FC<MovieTileProps> = ({imageUrl, movieName, releaseYear, relevantGenres, onClick}) => {
    return (
        <div className={styles.movieTile}>
            <img src={imageUrl} alt={movieName} onClick={() => onClick} />
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
