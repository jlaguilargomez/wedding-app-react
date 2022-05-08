import ActionButton from 'modules/common/components/ActionButton/ActionButton';
import NavButton from 'modules/common/components/NavButton/NavButton';
import React from 'react';

import cn from 'classnames';

import styles from 'styles/pages/JoinForm.module.scss';
import { useNavigate } from 'react-router-dom';
import { useUserData } from 'modules/common/hooks/useUserData/useUserData';
import Loader from 'modules/common/components/Loader/Loader';

function JoinForm(): JSX.Element {
    const navigate = useNavigate();
    const { userData } = useUserData();
    console.log('user', userData);

    if (!userData) {
        return <Loader show />;
    }
    return (
        <>
            <h1>Únete</h1>

            <section className={styles['join-form__list']}>
                <div className={styles['join-form__elem']}>
                    Mariano Rajoy Brey
                    <div className="flex">
                        <ActionButton icon="E" /> <ActionButton icon="R" />
                    </div>
                </div>
                <div className={styles['join-form__elem']}>
                    Roberto Carlos
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
                    <input id="go" type="checkbox" checked={userData.byBusGo} />
                    <span className="checkmark" />
                    Ida
                </label>

                <label className={cn('custom-checkbox')} htmlFor="back">
                    <input
                        id="back"
                        type="checkbox"
                        checked={userData.byBusBack}
                    />
                    <span className="checkmark" />
                    Vuelta
                </label>
            </form>
            <NavButton position="back" onClickEvent={() => navigate('/main')} />
        </>
    );
}

export default JoinForm;
