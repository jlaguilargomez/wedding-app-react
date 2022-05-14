import React from 'react';

import styles from 'styles/components/ActionButton.module.scss';

interface ActionButtonProps {
    icon?: any;
    type?: 'button' | 'submit';
    onClickEvent?: () => void;
}

function ActionButton({
    icon = 'i',
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
            {icon}
        </button>
    );
}

export default ActionButton;
