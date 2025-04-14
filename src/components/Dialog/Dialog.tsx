import styles from "./Dialog.module.css";
import React, {ReactNode} from "react";
import {FocusTrap} from "focus-trap-react";
import {createPortal} from "react-dom";

interface DialogProps {
    dialogTitle: string;
    content: ReactNode;
    handleToggleDialog: () => void;
    showDialog: boolean;
}

const Dialog: React.FC<DialogProps> = ({dialogTitle, content, handleToggleDialog, showDialog}) => {
    if (!showDialog) {
        return null;
    }

    return (
        createPortal(
            <FocusTrap focusTrapOptions={{}}>
                {<div className={styles.dialogContainer}>
                    <h1 className={styles.dialogTitle}>{dialogTitle}</h1>
                    {content}
                    <button className={styles.closeButton}
                            name="close"
                            aria-label="close"
                            onClick={handleToggleDialog}
                    >
                        X
                    </button>
                </div>
                }
            </FocusTrap>, document.body)
    )
}

export default Dialog;
