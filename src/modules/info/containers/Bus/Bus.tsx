import React from 'react';

function Bus(): JSX.Element {
    return (
        <>
            <h2 className="secondary-title">Info del bus</h2>
            <p className="info-text">
                Saldrá de <span className="info-text__highlight">Móstoles</span>
                , junto a la parada de{' '}
                <span className="info-text__highlight">
                    Manuela Malasaña a las 16.30
                </span>
                , y hará una{' '}
                <span className="info-text__highlight">
                    parada en la zona de Moncloa (Madrid) a eso de las 17.10
                </span>{' '}
                para dejaros sobre las{' '}
                <span className="info-text__highlight">
                    18.10 en la finca Monteviejo.
                </span>
            </p>
            <p className="info-text">
                A la vuelta,{' '}
                <span className="info-text__highlight">
                    partirá de Monteviejo a las 5:15,
                </span>{' '}
                ¡después de la fiesta! y recorrerá las{' '}
                <span className="info-text__highlight">mismas paradas: </span>
                primero Moncloa y luego Móstoles. Procuraremos que la conducción
                sea tranquila para que podáis echar una cabezadita...
            </p>
            <p className="info-text info-text__highlight">
                Os confirmaremos toda esta info la semana del 5 de septiembre.
            </p>
        </>
    );
}

export default Bus;
