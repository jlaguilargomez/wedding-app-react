import React from 'react';

import cn from 'classnames';

import styles from 'styles/components/NavButton.module.scss';

interface NavButtonProps {
    icon?: string;
    onClickEvent?: () => void;
}

function NavButton({
    icon,

    onClickEvent,
}: NavButtonProps): JSX.Element {
    return (
        <button
            type="button"
            className={cn(styles['nav-button'])}
            onClick={onClickEvent}
        >
            <img
                className={styles['nav-button__icon']}
                src={icon}
                alt="action-button"
            />
        </button>
    );
}

export default NavButton;
