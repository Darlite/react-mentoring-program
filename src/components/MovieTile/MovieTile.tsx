import styles from './MovieTile.module.css';
import React, {useState} from "react";
import {MovieDetailsData} from "../../types/MovieDetailsData";
import {GenreType} from "../../constants/GenreType";
import placeholderImage from "../../assets/images/placeholderPoster.jpg"

interface MovieTileProps {
    movieDetails: MovieDetailsData,
    onClick: (movieDetails:MovieDetailsData ) => void;
    handleEdit: () => void;
    handleDelete: () => void;
}

const handleImageError = (e :  React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = placeholderImage;
    e.currentTarget.onerror = null;
}

const MovieTile: React.FC<MovieTileProps> = ({movieDetails, onClick, handleEdit, handleDelete}) => {
    const { poster_path, title, release_date, genres } = movieDetails;

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
             data-testid="movie-tile"
             onMouseEnter={() => setHovered(true)}
             onMouseLeave={() => setHovered(false)}>
            <img className={styles.movieTileImage}
                 src={!poster_path ? placeholderImage : poster_path}
                 alt={title}
                 onClick={() => onClick(movieDetails)}
                 onError={handleImageError}
            />
            {isHovered && (
                <span className={styles.kebabMenu}
                      role="button"
                      onClick={showPopUp}
                >︙</span>
            )}
            {showContextMenu && (
                <div className={styles.contextMenu} data-testid="context-menu">
                    <div className={styles.contextMenuClose} onClick={closePopUp}>X</div>
                    <div className={styles.contextMenuOption}
                         onClick={handleEdit}>Edit</div>
                    <div className={styles.contextMenuOption}
                         onClick={handleDelete}>Delete</div>
                </div>
            )}
            <span className={styles.movieTitleAndYear}>
                <h2 className={styles.title}>{title}</h2>
                <span className={styles.year}>{release_date.slice(0, 4)}</span>
            </span>
            <p className={styles.genres}>
                {genres.map((genre: GenreType) => (
                    <span key={genre}>{genre} </span>
                ))}
            </p>
        </div>
    )
}

export default MovieTile;
