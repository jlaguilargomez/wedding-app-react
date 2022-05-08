import ActionButton from 'modules/common/components/ActionButton/ActionButton';
import Button from 'modules/common/components/Button/Button';
import InfoCard from 'modules/common/components/InfoCard/InfoCard';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UsMain from 'assets/img/us_main.jpg';

import styles from 'styles/pages/Main.module.scss';

function Main(): JSX.Element {
    const navigate = useNavigate();

    return (
        <>
            <h1>¡Nos casamos!</h1>
            <img className={styles.main__img} src={UsMain} alt="nosotros" />
            <InfoCard>
                <div>
                    <p>
                        El próximo día 16 de septiembre nos casamos y queremos
                        que formes parte de este día tan especial para nosotros.
                    </p>
                    <br />
                    <p>
                        Te invitamos a acompañarnos y a disfrutar del evento que
                        tendrá lugar el 16 de septiembre en la Finca Monteviejo
                        (Madrid).
                    </p>
                </div>
            </InfoCard>

            <Button text="¡Me apunto!" />
            <Button text="Info" onClickEvent={() => navigate('/info')} />
            <Button text="Sorteo..." />
            <ActionButton position="back" onClickEvent={() => navigate('/')} />
        </>
    );
}

export default Main;
