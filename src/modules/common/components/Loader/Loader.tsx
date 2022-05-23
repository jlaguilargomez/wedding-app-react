import React from 'react';

import styles from 'styles/components/Loader.module.scss';

const RAMDOM_LOADING_TEXT: { [key: number]: string } = {
    0: 'Conectando con Ganimedes...',
    1: 'Recargando desinconjas...',
    2: 'Preparando condensador de fluzo...',
    3: 'Estabilizando pollo de goma...',
    4: 'Replegando estramonio...',
    5: 'Calculando molaridad de disolución...',
};
interface LoaderProps {
    show: boolean;
}

function Loader({ show }: LoaderProps): JSX.Element | null {
    const randomNum = Math.round(Math.random() * 5);
    return show ? (
        <div className={styles['loader-container']}>
            <h3>{RAMDOM_LOADING_TEXT[randomNum]}</h3>
            <p className={styles.loader} />
        </div>
    ) : null;
}

export default Loader;
