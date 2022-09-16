import Button from 'modules/common/components/Button/Button';
import InfoCard from 'modules/common/components/InfoCard/InfoCard';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UsPrewed from 'assets/img/us-prewed.jpg';

import styles from 'styles/pages/Main.module.scss';
import Modal from 'modules/common/containers/Modal/Modal';
import { UserDataContext } from 'context/UserData/userData.context';

function Main(): JSX.Element {
    const [showModal, setShowModal] = useState<boolean>(false);

    const { userData } = useContext(UserDataContext);

    const navigate = useNavigate();

    const toggleModal = (): void =>
        setShowModal((prevValue: boolean) => !prevValue);

    return (
        <main className={styles['main-container']}>
            <img className={styles.main__img} src={UsPrewed} alt="nosotros" />
            {userData?.clue ? (
                <InfoCard>
                    <b>La clave es: {userData.clue.toLocaleUpperCase()}</b>
                </InfoCard>
            ) : null}

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

            <Button text="Info" onClickEvent={() => navigate('/info')} />
            {/* <Button
                text="Confirmar asistencia"
                onClickEvent={() => navigate('/join')}
            /> */}
            {/* <Button text="¡Comparte tus fotos!" onClickEvent={toggleModal} /> */}
            <Button
                text="¡Comparte tus fotos!"
                onClickEvent={() =>
                    window.open('https://photos.app.goo.gl/fK4LxRrcL3xoiMji8')
                }
            />
            {/* <Button text="Sorteo..." /> */}

            {showModal && (
                <Modal onClickClose={toggleModal}>
                    <>
                        <h2 className="secondary-title">Compartir fotos</h2>
                        <p>
                            ¡El día del evento habilitaremos un enlace para que
                            puedas compartir tus fotos por Google Fotos!
                        </p>
                    </>
                </Modal>
            )}
        </main>
    );
}

export default Main;
