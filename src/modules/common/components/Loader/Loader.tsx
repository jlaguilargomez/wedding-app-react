import React from 'react';

import styles from 'styles/components/Loader.module.scss';

interface LoaderProps {
    show: boolean;
}

function Loader({ show }: LoaderProps): JSX.Element | null {
    return show ? <div className={styles.loader} /> : null;
}

export default Loader;
