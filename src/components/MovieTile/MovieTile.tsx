import styles from './MovieTile.module.css';
import React, {useState} from "react";
import {MovieDetailsData} from "../../types/MovieDetailsData";

interface MovieTileProps {
    movieDetails: MovieDetailsData,
    onClick: (movieDetails:MovieDetailsData ) => void;
    handleEdit: () => void;
    handleDelete: () => void;
}

const MovieTile: React.FC<MovieTileProps> = ({movieDetails, onClick, handleEdit, handleDelete}) => {
    const { imageUrl, title, releaseDate, genres } = movieDetails;

    const [isHovered, setHovered] = useState(false);
    const [showContextMenu, setShowContextMenu] = useState(false);

    function showPopUp() {
        setShowContextMenu(true);
    }

    function closePopUp() {
        setShowContextMenu(false);
    }

    return (
        <div className={styles.movieTile}
             data-testid="movieTile"
             onMouseEnter={() => setHovered(true)}
             onMouseLeave={() => setHovered(false)}>
            <img
                 src={imageUrl}
                 alt={title}
                 onClick={() => onClick(movieDetails)} />
            {isHovered && (
                <span className={styles.kebabMenu}
                      role="button"
                      onClick={showPopUp}
                >︙</span>
            )}
            {showContextMenu && (
                <div className={styles.contextMenu} data-testid="contextMenu">
                    <div className={styles.contextMenuClose} onClick={closePopUp}>X</div>
                    <div className={styles.contextMenuOption}
                         onClick={handleEdit}>Edit</div>
                    <div className={styles.contextMenuOption}
                         onClick={handleDelete}>Delete</div>
                </div>
            )}
            <span className={styles.movieTitleAndYear}>
                <h2 className={styles.title}>{title}</h2>
                <span className={styles.year}>{releaseDate}</span>
            </span>
            <p className={styles.genres}>
                {genres.map(genre => (
                    <span key={genre}>{genre} </span>
                ))}
            </p>
        </div>
    )
}

export default MovieTile;
