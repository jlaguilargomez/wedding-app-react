import React from 'react';
import styles from 'styles/containers/Bus.module.scss';

function Bus(): JSX.Element {
    return (
        <>
            <h2 className="secondary-title">Info del bus</h2>
            <div className={styles.bus__text}>
                <p className="info-text">
                    Saldrá de{' '}
                    <span className="info-text__highlight">Móstoles</span>, de
                    la zona del metro de{' '}
                    <span className="info-text__highlight">
                        Manuela Malasaña, junto al Aldi, a las 16.30
                    </span>
                    , y hará una parada en{' '}
                    <span className="info-text__highlight">
                        Alcorcón Central a las 16.40
                    </span>{' '}
                    y otra en{' '}
                    <span className="info-text__highlight">
                        Principe Pío (Glorieta de San Vicente) a las 17.00{' '}
                    </span>
                    y de aquí a la finca.
                </p>
                <p className="info-text">
                    A la vuelta, habrá dos salidas: una a las{' '}
                    <span className="info-text__highlight">2.30</span> y otra a
                    las{' '}
                    <span className="info-text__highlight">
                        5.10 (¡esperamos que os quedéis hasta esta!)
                    </span>{' '}
                    y recorrerá las{' '}
                    <span className="info-text__highlight">
                        mismas paradas{' '}
                    </span>
                    .
                </p>
                <p className="info-text">
                    Procuraremos que la conducción sea tranquila para que podáis
                    echar una cabezadita...
                </p>
                <p className="info-text">
                    Por favor, si no nos notificaste que ibas a coger bus y
                    ahora te decantas por esta opción,{' '}
                    <span className="info-text__highlight">
                        ¡háznoslo saber! 😉
                    </span>
                </p>
            </div>
        </>
    );
}

export default Bus;
