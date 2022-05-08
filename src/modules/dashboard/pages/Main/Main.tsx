import ActionButton from 'modules/common/components/ActionButton/ActionButton';
import Button from 'modules/common/components/Button/Button';
import InfoCard from 'modules/common/components/InfoCard/InfoCard';
import Modal from 'modules/common/containers/Modal/Modal';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from 'styles/pages/Main.module.scss';

function Main(): JSX.Element {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState<boolean>(false);

    return (
        <>
            <h1>¡Nos casamos!</h1>
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
            {showModal && (
                <Modal>
                    <h1>Soy un modal</h1>
                </Modal>
            )}
            <Button text="¡Me apunto!" />
            <Button btnStyle="secondary" text="Info" />
            <Button btnStyle="secondary" text="Sorteo..." />
            <ActionButton position="back" onClickEvent={() => navigate('/')} />
            <ActionButton onClickEvent={() => navigate('/info')} />
        </>
    );
}

export default Main;
