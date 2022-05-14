import React from 'react';

import cn from 'classnames';

import styles from 'styles/components/NavButton.module.scss';

interface NavButtonProps {
    position?: 'next' | 'back';
    onClickEvent?: () => void;
}

function NavButton({
    position = 'next',
    onClickEvent,
}: NavButtonProps): JSX.Element {
    return (
        <button
            type="button"
            className={cn(
                styles['nav-button'],
                styles[`nav-button--${position}`]
            )}
            onClick={onClickEvent}
        >
            &gt;
        </button>
    );
}

export default NavButton;
