import React from "react";
import styles from "./SortControl.module.css";

interface SortControlProps {
    currentSelection: string;
    onSelect: (option: string) => void;
}

const SortControl: React.FC<SortControlProps> = ({currentSelection, onSelect}) => {
    return (
        <div className={styles.sortControl}>
            <label>Sort By</label>
            <select onChange={(event) => onSelect(event.target.value)}
                    value={currentSelection}>
                <option value="release_date">Release Date</option>
                <option value="title">Title</option>
            </select>
        </div>
    )
}

export default SortControl;
