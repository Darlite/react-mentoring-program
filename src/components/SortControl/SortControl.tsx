import React from "react";
import styles from "./SortControl.module.css";

interface SortControlProps {
    currentSelection: string;
    onSelect: (option: string) => void;
    sortOrder: string;
    onSortOrderChange: () => void;
}

const SortControl: React.FC<SortControlProps> = ({currentSelection, onSelect, sortOrder, onSortOrderChange}) => {
    return (
        <div className={styles.sortControl}>
            <label>Sort By</label>
            <select data-cy="sort-select"
                    onChange={(event) => onSelect(event.target.value)}
                    value={currentSelection}>
                <option value="release_date">Release Date</option>
                <option value="title">Title</option>
            </select>
            <button className={styles.sortOrderButton}
                    onClick={onSortOrderChange}
                    aria-label="Sort order button">
                <span className={sortOrder === "asc" ? styles.arrowUp : styles.arrowDown}
                      aria-hidden="true"
                      data-testid="sort-arrow"/>
            </button>
        </div>
    )
}

export default SortControl;
