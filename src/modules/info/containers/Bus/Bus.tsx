import React from 'react';

function Bus(): JSX.Element {
    return (
        <>
            <h2 className="secondary-title">Info del bus</h2>
            <p className="info-text">
                Saldrá de <span className="info-text__highlight">Móstoles</span>
                , en la zona del metro de{' '}
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
                A la vuelta, partirá de{' '}
                <span className="info-text__highlight">
                    Monteviejo a las 5:10 aprox,
                </span>{' '}
                y recorrerá las{' '}
                <span className="info-text__highlight">mismas paradas </span>.
            </p>
            <p>
                Procuraremos que la conducción sea tranquila para que podáis
                echar una cabezadita...
            </p>
        </>
    );
}

export default Bus;
