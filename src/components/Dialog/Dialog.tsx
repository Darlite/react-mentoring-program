import styles from "./Dialog.module.css";
import React, {ReactNode} from "react";
import {FocusTrap} from "focus-trap-react";

interface DialogProps {
    dialogTitle: string;
    content: ReactNode;
    handleToggleDialog: () => void;
}

const Dialog: React.FC<DialogProps> = ({dialogTitle, content, handleToggleDialog}) => {
    return (
        <FocusTrap focusTrapOptions={{}}>
            {<div className={styles.dialogContainer}>
                <h1 className={styles.dialogTitle}>{dialogTitle}</h1>
                {content}
                <button className={styles.closeButton}
                        name="close"
                        aria-label="close"
                        onClick={handleToggleDialog}>X</button>
            </div>
            }
        </FocusTrap>
    )
}

export default Dialog;
