import React, { FormEvent, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

import { auth } from 'lib/firebase/firebase.config.js';

import Input from 'modules/common/components/Input/Input';
import Button from 'modules/common/components/Button/Button';

import styles from 'styles/containers/LoginForm.module.scss';

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

        await toast.promise(
            auth.signInWithEmailAndPassword(
                `${user.toLowerCase()}@bodamaruyjose.com`,
                pass
            ),
            {
                loading: 'Comprobando...',
                success: <b>Usuario correcto</b>,
                error: <b>Los datos introducidos no son correctos</b>,
            }
        );

        navigate('/');
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
