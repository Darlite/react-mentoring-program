import React from "react";
import styles from "../../styles/SortControl.module.css";

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
                <option value="Release Date">Release Date</option>
                <option value="Title">Title</option>
            </select>
        </div>
    )
}

export default SortControl;
