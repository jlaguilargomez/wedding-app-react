import React, { ChangeEvent } from 'react';
import cn from 'classnames';

import styles from 'styles/components/Input.module.scss';

interface InputProps {
    type?: 'text' | 'password';
    name: string;
    value: string;
    placeholder?: string;
    pattern?: string;
    required?: boolean;
    labelText?: string;
    errorMessage?: string;
    onChangeEvent: (name: string, value: string) => void;
}

function Input({
    type = 'text',
    name,
    value,
    placeholder = ' ',
    pattern,
    required = false,
    labelText,
    errorMessage = 'El formato introducido no es correcto',
    onChangeEvent,
}: InputProps): JSX.Element {
    const handleInput = (event: ChangeEvent<HTMLInputElement>): void => {
        const {
            target: { name: inputName, value: inputValue },
        } = event;

        onChangeEvent(inputName, inputValue);
    };
    return (
        <div className={cn(styles['input-container'])}>
            {labelText && (
                <label className={cn(styles.label)} htmlFor={name}>
                    {labelText}
                </label>
            )}
            <input
                className={cn(styles.input)}
                type={type}
                id={name}
                name={name}
                value={value}
                pattern={pattern}
                placeholder={placeholder}
                onChange={handleInput}
                onBlur={handleInput}
                required={required}
                autoComplete="off"
            />
            {pattern && (
                <span className={cn(styles['error-text'])}>{errorMessage}</span>
            )}
        </div>
    );
}

export default Input;
