import React from 'react';

import cn from 'classnames';

import WeddingKiss from 'assets/img/wedding-kiss.png';

import styles from 'styles/pages/Landing.module.scss';
import { useNavigate } from 'react-router-dom';
import Button from 'modules/common/components/Button/Button';

function Landing(): JSX.Element {
    const navigate = useNavigate();

    return (
        <main className={styles.landing}>
            <div className={styles['landing__title-box']}>
                <h1 className={cn('title', styles.landing__title)}>
                    <span>Maru</span>
                    <span>&</span>
                    <span>Jose</span>
                </h1>
                <h2 className={cn('title', styles.landing__subtitle)}>
                    16 sept 22
                </h2>
            </div>

            <img
                className={styles.landing__img}
                src={WeddingKiss}
                alt="novios"
            />
            <Button
                text="¡Vámonos de boda!"
                btnStyle="secondary"
                onClickEvent={() => navigate('/main')}
            />
        </main>
    );
}

export default Landing;
