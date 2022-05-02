import React from 'react';

import cn from 'classnames';

import WeddingKiss from 'assets/img/wedding-kiss.png';

import styles from 'styles/pages/Landing.module.scss';

function Landing(): JSX.Element {
    return (
        <main className={styles['landing-container']}>
            <div className={styles['landing-title-box']}>
                <h1 className={cn('title', styles['landing-title'])}>
                    <span>Maru</span>
                    <span>&</span>
                    <span>Jose</span>
                </h1>
                <h2 className={cn('title', styles['landing-subtitle'])}>
                    16 sept 22
                </h2>
            </div>

            <img
                className={styles['landing-img']}
                src={WeddingKiss}
                alt="novios"
            />
        </main>
    );
}

export default Landing;
