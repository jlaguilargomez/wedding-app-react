import React from 'react';
import Button from 'modules/common/components/Button/Button';

import styles from 'styles/containers/Calendar.module.scss';

function Calendar(): JSX.Element {
    return (
        <>
            <h2 className="secondary-title">Añadir al calendario</h2>
            <div className={styles.calendar__text}>
                <p>
                    El evento tendra lugar el día 16 de septiembre a las 18.30
                </p>
                <p>Si quieres, ¡añádelo al calendario para no olivarte!</p>
            </div>
            <Button
                btnStyle="secondary"
                text="Añadir al calendario"
                onClickEvent={() => {
                    window.open(
                        'https://calendar.google.com/calendar/r/eventedit?text=Boda+Maru+y+Jose&dates=20220916T183000/20220917T070000&details=Para+más+detalles+consulta:+https://bodamaruyjose.com+o+ponte+en+contacto+con+nosotros:+Maru+(620754067)+Jose+Luis+(616379123)/&location=Castillo+De+Monte+Viejo,+Km+37,+Carretera+Burgos,+0,+28710+El+Molar,+Madrid,+España'
                    );
                }}
            />
        </>
    );
}

export default Calendar;
