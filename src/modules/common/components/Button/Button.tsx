import React from 'react';
import cn from 'classnames';

import styles from 'styles/components/Button.module.scss';

interface ButtonProps {
    text: string;
    type?: 'button' | 'submit';
    btnStyle?: 'primary' | 'secondary';
    onClickEvent?: () => void;
}

function Button({
    text,
    type = 'button',
    btnStyle = 'primary',
    onClickEvent,
}: ButtonProps): JSX.Element {
    return (
        <button
            className={cn(
                styles.button,
                btnStyle === 'primary'
                    ? styles['button--primary']
                    : styles['button--secondary']
            )}
            // eslint-disable-next-line react/button-has-type
            type={type}
            onClick={onClickEvent}
        >
            {text}
        </button>
    );
}

export default Button;
