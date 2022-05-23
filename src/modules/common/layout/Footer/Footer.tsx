import NavButton from 'modules/common/components/NavButton/NavButton';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import Home from 'assets/svg/home.svg';
import LeftArrow from 'assets/svg/left-arrow.svg';

import styles from 'styles/layout/Footer.module.scss';

function Footer(): JSX.Element {
    const navigate = useNavigate();
    return (
        <footer className={styles.footer}>
            <NavButton icon={LeftArrow} onClickEvent={() => navigate(-1)} />
            <NavButton icon={Home} onClickEvent={() => navigate('/main')} />
        </footer>
    );
}

export default Footer;
