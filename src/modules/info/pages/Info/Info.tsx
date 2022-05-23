import ActionButton from 'modules/common/components/NavButton/NavButton';
import Button from 'modules/common/components/Button/Button';
import InfoCard from 'modules/common/components/InfoCard/InfoCard';
import Modal from 'modules/common/containers/Modal/Modal';
import Calendar from 'modules/info/containers/Calendar/Calendar';
import Contact from 'modules/info/containers/Contact/Contact';
import Place from 'modules/info/containers/Place/Place';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from 'styles/pages/Info.module.scss';

enum ModalInfo {
    CONTACT = 'contact',
    PLACE = 'place',
    CALENDAR = 'calendar',
}

const modalInfoData = {
    contact: <Contact />,
    place: <Place />,
    calendar: <Calendar />,
};

function Info(): JSX.Element {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [modalInfo, setModalInfo] = useState<ModalInfo>(ModalInfo.CONTACT);
    const navigate = useNavigate();

    const toggleModal = (): void =>
        setShowModal((prevValue: boolean) => !prevValue);

    const openSpecificModal = (modalType: ModalInfo): void => {
        setShowModal(true);
        setModalInfo(modalType);
    };

    return (
        <>
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

            <Button
                text="Contacto"
                onClickEvent={() => openSpecificModal(ModalInfo.CONTACT)}
            />
            <Button
                text="¿Cómo llegar?"
                onClickEvent={() => openSpecificModal(ModalInfo.PLACE)}
            />
            <Button
                text="Añadir al calendario"
                onClickEvent={() => openSpecificModal(ModalInfo.CALENDAR)}
            />

            {showModal && (
                <Modal onClickClose={toggleModal}>
                    {modalInfoData[modalInfo]}
                </Modal>
            )}
        </>
    );
}

export default Info;
