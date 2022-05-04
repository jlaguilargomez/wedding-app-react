import React from 'react';

import styles from 'styles/components/Loader.module.scss';

interface LoaderProps {
    show: boolean;
}

function Loader({ show }: LoaderProps): JSX.Element | null {
    return show ? (
        <div className={styles['loader-container']}>
            <h3>Recargando desinconjas...</h3>
            <p className={styles.loader} />
        </div>
    ) : null;
}

export default Loader;
