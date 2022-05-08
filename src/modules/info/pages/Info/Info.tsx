import ActionButton from 'modules/common/components/ActionButton/ActionButton';
import Button from 'modules/common/components/Button/Button';
import InfoCard from 'modules/common/components/InfoCard/InfoCard';
import Modal from 'modules/common/containers/Modal/Modal';
import Contact from 'modules/info/containers/Contact/Contact';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from 'styles/pages/Info.module.scss';

function Info(): JSX.Element {
    const [showModal, setShowModal] = useState<boolean>(true);
    const navigate = useNavigate();

    const toggleModal = (): void =>
        setShowModal((prevValue: boolean) => !prevValue);

    return (
        <>
            <h1>Info</h1>
            <section className={styles.info__img} />
            <div className={styles['info__card-container']}>
                <InfoCard>
                    <p>
                        Tanto la ceremonia como el posterior convite, cena y
                        fiesta tendrán lugar en la Finca Castillo de Monteviejo
                        (km. 37 de la A-1) a las 18.30 de la tarde del 16 de
                        septiembre
                    </p>
                </InfoCard>
            </div>

            <Button text="Contacto" onClickEvent={toggleModal} />
            <Button text="¿Cómo llegar?" />
            <Button text="Añadir al calendario" />
            <ActionButton
                position="back"
                onClickEvent={() => navigate('/main')}
            />
            {showModal && (
                <Modal onClickClose={toggleModal}>
                    <Contact />
                </Modal>
            )}
        </>
    );
}

export default Info;
