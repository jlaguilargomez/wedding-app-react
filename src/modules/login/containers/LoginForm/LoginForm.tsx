import React, { FormEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { auth } from 'lib/firebase/firebase.config.js';

import Input from 'modules/common/components/Input/Input';
import Button from 'modules/common/components/Button/Button';

import styles from 'styles/containers/LoginForm.module.scss';
import handleToast from 'utils/handleToast';
import { UserDataContext } from 'context/UserData/userData.context';
import { takeUserFromEmail } from 'utils/utils';

interface LoginForm {
    user: string;
    pass: string;
}

interface IUserLoginInfo {
    user: string;
    pass: string;
}

const defaultUserLoginInfo: IUserLoginInfo = {
    user: '',
    pass: '',
};

function LoginForm(): JSX.Element {
    const [form, setForm] = useState<LoginForm>(defaultUserLoginInfo);
    const { userId } = useParams();
    const navigate = useNavigate();

    const { createUser } = useContext(UserDataContext);

    useEffect(() => {
        if (userId) {
            setForm((prevValue) => ({
                ...prevValue,
                user: userId,
            }));
        }
    }, [userId]);

    const handleInput = (name: string, value: string): void => {
        setForm((prevFormValues) => ({ ...prevFormValues, [name]: value }));
    };

    const handleSubmit = async (
        event: FormEvent<HTMLFormElement>
    ): Promise<void> => {
        event.preventDefault();

        const { user, pass } = form;

        try {
            const data = await handleToast(
                auth.signInWithEmailAndPassword(
                    `${user.toLowerCase()}@bodamaruyjose.com`,
                    pass
                ),
                {
                    loading: 'Comprobando usuario...',
                    success: <b>¡Adelante!</b>,
                    error: <b>Comprueba tu usuario y contraseña</b>,
                }
            );

            await createUser(
                data.user?.uid,
                takeUserFromEmail(data.user?.email)
            );

            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form
            className={styles['login-form']}
            onSubmit={handleSubmit}
            autoComplete="off"
        >
            <Input
                labelText="Usuario"
                name="user"
                value={form.user}
                pattern="[a-zA-Z]*"
                errorMessage="Revisa el nobre de usuario introducido"
                onChangeEvent={handleInput}
            />
            <Input
                type="password"
                labelText="Contraseña"
                name="pass"
                pattern="^[a-zA-Z0-9]*"
                value={form.pass}
                onChangeEvent={handleInput}
            />
            <Button text="Acceder" type="submit" />
        </form>
    );
}

export default LoginForm;
