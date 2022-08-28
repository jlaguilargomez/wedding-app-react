import Button from 'modules/common/components/Button/Button';
import InfoCard from 'modules/common/components/InfoCard/InfoCard';
import Modal from 'modules/common/containers/Modal/Modal';
import Calendar from 'modules/info/containers/Calendar/Calendar';
import Contact from 'modules/info/containers/Contact/Contact';
import Place from 'modules/info/containers/Place/Place';
import Gift from 'modules/info/containers/Gift/Gift';
import React, { useState } from 'react';

import styles from 'styles/pages/Info.module.scss';
import Bus from 'modules/info/containers/Bus/Bus';

enum ModalInfo {
    CONTACT = 'contact',
    PLACE = 'place',
    CALENDAR = 'calendar',
    GIFT = 'gift',
    BUS = 'bus',
}

const modalInfoData = {
    contact: <Contact />,
    place: <Place />,
    calendar: <Calendar />,
    gift: <Gift />,
    bus: <Bus />,
};

function Info(): JSX.Element {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [modalInfo, setModalInfo] = useState<ModalInfo>(ModalInfo.CONTACT);

    const toggleModal = (): void =>
        setShowModal((prevValue: boolean) => !prevValue);

    const openSpecificModal = (modalType: ModalInfo): void => {
        setShowModal(true);
        setModalInfo(modalType);
    };

    return (
        <main className={styles['info-container']}>
            <section className={styles.info__img} />
            <div className={styles['info__card-container']}>
                <InfoCard>
                    <p>
                        Tanto la ceremonia como el posterior convite, cena y
                        fiesta tendrán lugar en la{' '}
                        <b>
                            Finca Castillo de Monteviejo (km. 37 de la A-1) a
                            las 18.30 de la tarde del 16 de septiembre
                        </b>
                    </p>
                </InfoCard>
            </div>

            <Button
                text="Cómo llegar en coche"
                onClickEvent={() => openSpecificModal(ModalInfo.PLACE)}
            />
            <Button
                text="Sobre el bus"
                onClickEvent={() => openSpecificModal(ModalInfo.BUS)}
            />
            <Button
                text="Regalo a los novios"
                onClickEvent={() => openSpecificModal(ModalInfo.GIFT)}
            />
            <Button
                text="Contacto"
                onClickEvent={() => openSpecificModal(ModalInfo.CONTACT)}
            />

            {showModal && (
                <Modal onClickClose={toggleModal}>
                    {modalInfoData[modalInfo]}
                </Modal>
            )}
        </main>
    );
}

export default Info;
