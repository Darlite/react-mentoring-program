import styles from "../InputField/InputField.module.css";
import React from "react";

interface InputFieldProps {
    id: string;
    label: string;
    type: string;
    name: string;
    placeholder: string;
    defaultValue?: string;
    ariaLabel?: string;
    register?: any;
    registerOptions?: any,
    step?: string;
    errorMessage?: string;
}

const InputField: React.FC<InputFieldProps> = ({
                                                   id,
                                                   label,
                                                   type,
                                                   name,
                                                   placeholder,
                                                   defaultValue,
                                                   ariaLabel,
                                                   register,
                                                   registerOptions,
                                                   step,
                                                   errorMessage,
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
                   aria-label={ariaLabel || label}
                   {...(register ? register(name, registerOptions) : {})}
                   step={step}
            />
            {errorMessage && <span className={styles.errorMessage}>{errorMessage}</span>}
        </div>
    )
}

export default InputField;
