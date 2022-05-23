import Button from 'modules/common/components/Button/Button';
import InfoCard from 'modules/common/components/InfoCard/InfoCard';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import UsMain from 'assets/img/us_main.jpg';

import styles from 'styles/pages/Main.module.scss';

function Main(): JSX.Element {
    const navigate = useNavigate();

    return (
        <>
            <img className={styles.main__img} src={UsMain} alt="nosotros" />
            <InfoCard>
                <div>
                    <p>
                        ¡El próximo <b>día 16 de septiembre</b> nos casamos y
                        queremos que formes parte de este día tan especial para
                        nosotros!
                    </p>
                    <br />
                    <p>
                        Te invitamos a acompañarnos y a disfrutar del evento que
                        trendrá en <b>Finca Monteviejo (Madrid)</b>.
                    </p>
                </div>
            </InfoCard>

            <Button text="¡Me apunto!" onClickEvent={() => navigate('/join')} />
            <Button text="Info" onClickEvent={() => navigate('/info')} />
            <Button
                text="¡Comparte tus fotos!"
                onClickEvent={() =>
                    window.open('https://photos.app.goo.gl/fK4LxRrcL3xoiMji8')
                }
            />
            <Button text="Sorteo..." />
        </>
    );
}

export default Main;
