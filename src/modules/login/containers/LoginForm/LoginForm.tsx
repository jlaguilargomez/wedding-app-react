import Input from 'modules/common/components/Input/Input';
import Button from 'modules/common/components/Button/Button';
import React, { FormEvent, useEffect, useState } from 'react';
// import toast from 'react-hot-toast';

import styles from 'styles/containers/LoginForm.module.scss';
import toast from 'react-hot-toast';
import { auth } from 'lib/firebase/firebase.config.js';
import { Link, useNavigate, useParams } from 'react-router-dom';

interface LoginForm {
    email: string;
    pass: string;
}

// interface LoginFormProps {
//     formValues: LoginForm;
// }
interface IUserLoginInfo {
    email: string;
    pass: string;
}

const defaultUserLoginInfo: IUserLoginInfo = {
    email: '',
    pass: '',
};

function LoginForm(): JSX.Element {
    console.log('LoginForm');

    const [form, setForm] = useState<LoginForm>(defaultUserLoginInfo);
    const { user } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            setForm((prevValue) => ({
                ...prevValue,
                email: `${user}@bodamyj.party`,
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

        const { email, pass } = form;

        await toast.promise(auth.signInWithEmailAndPassword(email, pass), {
            loading: 'Saving...',
            success: <b>Settings saved!</b>,
            error: <b>Could not save.</b>,
        });

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
                name="email"
                value={form.email}
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
