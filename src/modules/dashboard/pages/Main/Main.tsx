import Button from 'modules/common/components/Button/Button';
import InfoCard from 'modules/common/components/InfoCard/InfoCard';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import UsMain from 'assets/img/us_main.jpg';

import styles from 'styles/pages/Main.module.scss';

function Main(): JSX.Element {
    const navigate = useNavigate();

    return (
        <main className={styles['main-container']}>
            <img className={styles.main__img} src={UsMain} alt="nosotros" />
            <InfoCard>
                <div>
                    <p>
                        ¡El próximo <b>día 16 de septiembre a las 18.30</b> nos
                        casamos en <b>Finca Monteviejo (Madrid),</b> y nos
                        encantaría contar contigo para{' '}
                        <b>pasarlo genial en este evento tan especial</b>!
                    </p>
                </div>
            </InfoCard>

            <Button
                text="¡Confirmar asistencia!"
                onClickEvent={() => navigate('/join')}
            />
            <Button text="Info" onClickEvent={() => navigate('/info')} />
            <Button
                text="¡Comparte tus fotos!"
                onClickEvent={() =>
                    window.open('https://photos.app.goo.gl/fK4LxRrcL3xoiMji8')
                }
            />
            <Button text="Sorteo..." />
        </main>
    );
}

export default Main;
