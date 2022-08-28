import Button from 'modules/common/components/Button/Button';
import React from 'react';

function Gift(): JSX.Element {
    return (
        <>
            <h2 className="secondary-title">Regalo</h2>
            <div>
                Te dejamos nuestro{' '}
                <span className="info-text__highlight">número de cuenta </span>
                por si quieres hacernos un regalito{' '}
                <span role="img" aria-label="happy">
                    😊
                </span>
            </div>
            <p className="info-text info-text__highlight">
                ES42 1465 0350 21 1731183639
            </p>
            <p className="info-text">
                <span className="info-text__highlight">**</span>Monedas no
                aceptadas: rublos, guiles, rupias, reales, bitcornis, cabras,
                bolívares
            </p>
            <Button
                btnStyle="secondary"
                text="Copiar al portapapeles"
                onClickEvent={() => {
                    navigator.clipboard.writeText(
                        'ES42 1465 0350 21 1731183639'
                    );
                }}
            />
        </>
    );
}

export default Gift;
