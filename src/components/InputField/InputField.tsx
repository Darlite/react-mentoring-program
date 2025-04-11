import styles from "../InputField/InputField.module.css";
import React from "react";

interface InputFieldProps {
    id: string;
    label: string;
    type: string;
    name: string;
    placeholder: string;
    defaultValue?: string;
    required?: boolean;
    ariaLabel?: string;
}

const InputField: React.FC<InputFieldProps> = ({
    id,
    label,
    type,
    name,
    placeholder,
    defaultValue,
    required,
    ariaLabel
}) => {
    return (
        <div className={styles.labelAndInputContainer}>
            <label className={styles.inputLabel}
                   htmlFor={id}>{label}</label>
            <input className={styles.input}
                   id={id}
                   type={type}
                   name={name}
                   placeholder={placeholder}
                   defaultValue={defaultValue}
                   required={required}
                   aria-label={ariaLabel || label}
            />
        </div>
    )
}

export default InputField;
