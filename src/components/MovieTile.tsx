import styles from '../styles/MovieTile.module.css';
import React, {useState} from "react";
import {MovieDetailsData} from "../types/MovieDetailsData";

interface MovieTileProps {
    movieDetails: MovieDetailsData,
    onClick: (movieName:string ) => void;
}

const MovieTile: React.FC<MovieTileProps> = ({movieDetails, onClick}) => {
    const { imageUrl, movieName, releaseYear, relevantGenres } = movieDetails;

    const [isHovered, setHovered] = useState(false);
    const [showContextMenu, setShowContextMenu] = useState(false);

    function showPopUp() {
        setShowContextMenu(true);
    }

    function closePopUp() {
        setShowContextMenu(false);
    }

    return (
        <div className={styles.movieTile} onMouseEnter={() => setHovered(true)}
             onMouseLeave={() => setHovered(false)}>
            <img
                 src={imageUrl}
                 alt={movieName}
                 onClick={() => onClick(movieName)} />
            {isHovered && (
                <span className={styles.kebabMenu}
                      onClick={showPopUp}
                >︙</span>
            )}
            {showContextMenu && (
                <div className={styles.contextMenu}>
                    <div className={styles.contextMenuClose} onClick={closePopUp}>X</div>
                    <div className={styles.contextMenuOption}>Edit</div>
                    <div className={styles.contextMenuOption}>Delete</div>
                </div>
            )}
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
