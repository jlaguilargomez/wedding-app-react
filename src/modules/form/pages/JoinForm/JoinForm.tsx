import ActionButton from 'modules/common/components/ActionButton/ActionButton';
import NavButton from 'modules/common/components/NavButton/NavButton';
import React from 'react';

import cn from 'classnames';

import styles from 'styles/pages/JoinForm.module.scss';

function JoinForm(): JSX.Element {
    return (
        <>
            <h1>Únete</h1>

            <section className={styles['join-form__list']}>
                <div className={styles['join-form__elem']}>
                    Jose Luis Aguilar
                    <div className="flex">
                        <ActionButton icon="E" /> <ActionButton icon="R" />
                    </div>
                </div>
                <div className={styles['join-form__elem']}>
                    Jose Luis Aguilar
                    <div className="flex">
                        <ActionButton icon="E" /> <ActionButton icon="R" />
                    </div>
                </div>
            </section>
            <div className={styles['join-form__elem']}>
                <p>Añadir invitado</p>
                <div className="flex">
                    <ActionButton icon="+" />
                </div>
            </div>

            <form className={styles['join-form__family-info']}>
                <p>¿Necesitas bus?</p>
                <label className={cn('custom-checkbox')} htmlFor="go">
                    <input id="go" type="checkbox" />
                    <span className="checkmark" />
                    Ida
                </label>

                <label className={cn('custom-checkbox')} htmlFor="back">
                    <input id="back" type="checkbox" />
                    <span className="checkmark" />
                    Vuelta
                </label>
            </form>
            <NavButton position="back" />
        </>
    );
}

export default JoinForm;
