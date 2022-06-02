import NavButton from 'modules/common/components/NavButton/NavButton';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Home from 'assets/svg/home.svg';
import LeftArrow from 'assets/svg/left-arrow.svg';
import Logout from 'assets/svg/log-out.svg';

import styles from 'styles/layout/Footer.module.scss';

import { auth } from 'lib/firebase/firebase.config.js';
import Modal from 'modules/common/containers/Modal/Modal';
import Button from 'modules/common/components/Button/Button';

function Footer(): JSX.Element {
    const [showModal, setShowModal] = useState<boolean>(false);

    const toggleModal = (): void =>
        setShowModal((prevValue: boolean) => !prevValue);

    const navigate = useNavigate();
    return (
        <>
            <footer className={styles.footer}>
                <NavButton icon={LeftArrow} onClickEvent={() => navigate(-1)} />
                <NavButton icon={Home} onClickEvent={() => navigate('/main')} />
                <NavButton icon={Logout} onClickEvent={toggleModal} />
            </footer>

            {showModal && (
                <Modal onClickClose={toggleModal}>
                    <>
                        <h2 className="secondary-title">¿Cerrar sesión?</h2>
                        <p>¿Estás seguro de que quieres cerrar la sesión?</p>
                        <Button
                            text="Confirmar"
                            btnStyle="secondary"
                            onClickEvent={() => auth.signOut()}
                        />
                    </>
                </Modal>
            )}
        </>
    );
}

export default Footer;
