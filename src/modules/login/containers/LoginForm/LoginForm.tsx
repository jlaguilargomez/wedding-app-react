import Input from 'modules/common/components/Input/Input';
import Button from 'modules/common/components/Button/Button';
import React, { FormEvent, useEffect, useState } from 'react';
// import toast from 'react-hot-toast';

import styles from 'styles/containers/LoginForm.module.scss';
import toast from 'react-hot-toast';
import { auth } from 'lib/firebase/firebase.config.js';
import { useNavigate, useParams } from 'react-router-dom';

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
    console.log('LoginForm');

    const [form, setForm] = useState<LoginForm>(defaultUserLoginInfo);
    const { userId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (userId) {
            setForm((prevValue) => ({
                ...prevValue,
                userId,
            }));
        }
    }, []);

    const handleInput = (name: string, value: string): void => {
        setForm((prevFormValues) => ({ ...prevFormValues, [name]: value }));
    };

    const handleSubmit = async (
        event: FormEvent<HTMLFormElement>
    ): Promise<void> => {
        event.preventDefault();

        const { user, pass } = form;

        await toast.promise(
            auth.signInWithEmailAndPassword(`${user}@bodamaruyjose.com`, pass),
            {
                loading: 'Saving...',
                success: <b>Settings saved!</b>,
                error: <b>Could not save.</b>,
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
                onChangeEvent={handleInput}
            />
            <Input
                type="password"
                labelText="Contraseña"
                name="pass"
                value={form.pass}
                onChangeEvent={handleInput}
            />
            <Button text="Acceder" type="submit" />
        </form>
    );
}

export default LoginForm;
