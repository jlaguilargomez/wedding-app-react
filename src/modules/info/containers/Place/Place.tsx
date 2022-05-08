import Button from 'modules/common/components/Button/Button';
import React from 'react';

import Placement from 'assets/img/placement.png';

import styles from 'styles/containers/Place.module.scss';

function Place(): JSX.Element {
    return (
        <>
            <h2 className="secondary-title">¿Cómo llegar?</h2>
            <img
                className={styles.place__img}
                src={Placement}
                alt="place to go"
            />
            <div className={styles.place__text}>
                <p>Finca Monteviejo</p>
                <p>A-1, km 37, 28710 El Molar, Madrid</p>
            </div>

            <Button
                btnStyle="secondary"
                text="Ver ruta"
                onClickEvent={() => {
                    window.open(
                        'https://www.google.com/maps/dir//castillo+finca+monteviejo/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0xd43d1cf11b79e15:0xa1dd3c3c5335e75?sa=X&ved=2ahUKEwjb__Xx38_3AhX2wQIHHf62BdAQ9Rd6BAhlEAU'
                    );
                }}
            />
        </>
    );
}

export default Place;
