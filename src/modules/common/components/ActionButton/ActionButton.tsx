import React from 'react';

import styles from 'styles/components/ActionButton.module.scss';

interface ActionButtonProps {
    text?: string;
    icon?: string;
    type?: 'button' | 'submit';
    onClickEvent?: () => void;
}

function ActionButton({
    text,
    icon,
    type = 'button',

    onClickEvent,
}: ActionButtonProps): JSX.Element {
    return (
        <button
            className={styles['action-button']}
            // eslint-disable-next-line react/button-has-type
            type={type}
            onClick={onClickEvent}
        >
            {text || (
                <img
                    className={styles['action-button__icon']}
                    src={icon}
                    alt="action-button"
                />
            )}
        </button>
    );
}

export default ActionButton;
