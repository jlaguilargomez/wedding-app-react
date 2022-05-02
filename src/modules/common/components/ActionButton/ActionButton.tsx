import React from 'react';

import cn from 'classnames';

import styles from 'styles/components/ActionButton.module.scss';

interface ActionButtonProps {
    position?: 'next' | 'back';
    onClickEvent?: () => void;
}

function ActionButton({
    position = 'next',
    onClickEvent,
}: ActionButtonProps): JSX.Element {
    return (
        <button
            type="button"
            className={cn(
                styles['action-button'],
                styles[`action-button--${position}`]
            )}
            onClick={onClickEvent}
        >
            &gt;
        </button>
    );
}

export default ActionButton;
