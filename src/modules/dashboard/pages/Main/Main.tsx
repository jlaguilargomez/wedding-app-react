import Button from 'modules/common/components/Button/Button';
import InfoCard from 'modules/common/components/InfoCard/InfoCard';
import React, { useState } from 'react';
import UsCeremony from 'assets/img/us-ceremony.jpg';

import styles from 'styles/pages/Main.module.scss';
import Modal from 'modules/common/containers/Modal/Modal';

function Main(): JSX.Element {
    const [showModal, setShowModal] = useState<boolean>(false);

    // const navigate = useNavigate();

    const toggleModal = (): void =>
        setShowModal((prevValue: boolean) => !prevValue);

    return (
        <main className={styles['main-container']}>
            <img className={styles.main__img} src={UsCeremony} alt="nosotros" />

            <InfoCard>
                <div>
                    <p>
                        <b>¡Muchísimas gracias</b> a todos los que compartísteis
                        con nosotros un día maravilloso y muy divertido que{' '}
                        <b>nunca olvidaremos!</b>
                    </p>
                </div>
            </InfoCard>

            <Button
                text="Fotomatón"
                onClickEvent={() =>
                    window.open('https://photos.app.goo.gl/3y1fD5sdXLsBuaQMA')
                }
            />
            <Button
                text="¡Comparte tus fotos!"
                onClickEvent={() =>
                    window.open('https://photos.app.goo.gl/fK4LxRrcL3xoiMji8')
                }
            />
            <Button text="Fotos profesionales" onClickEvent={toggleModal} />

            {showModal && (
                <Modal onClickClose={toggleModal}>
                    <>
                        <h2 className="secondary-title">Fotazas</h2>
                        <p>¡Estas fotos estarán disponibles próximamente!</p>
                    </>
                </Modal>
            )}
        </main>
    );
}

export default Main;
