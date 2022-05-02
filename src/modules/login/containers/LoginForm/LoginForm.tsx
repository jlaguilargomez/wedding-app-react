import Input from 'modules/common/components/Input/Input';
import Button from 'modules/common/components/Button/Button';
import React, { FormEvent, useState } from 'react';
// import toast from 'react-hot-toast';

import styles from 'styles/containers/LoginForm.module.scss';

interface LoginForm {
    email: string;
    pass: string;
}

interface LoginFormProps {
    formValues?: LoginForm;
}

const deaultFormValues = {
    email: '',
    pass: '',
};

function LoginForm({ formValues }: LoginFormProps): JSX.Element {
    const [form, setForm] = useState<LoginForm>(formValues || deaultFormValues);

    const handleInput = (name: string, value: string): void => {
        setForm((prevFormValues) => ({ ...prevFormValues, [name]: value }));
    };

    const handleSubmit = async (
        event: FormEvent<HTMLFormElement>
    ): Promise<void> => {
        event.preventDefault();
        console.log('form', form);

        // const { email, pass } = form;

        // toast.promise(auth.signInWithEmailAndPassword(email, pass), {
        //     loading: 'Saving...',
        //     success: <b>Settings saved!</b>,
        //     error: <b>Could not save.</b>,
        // });
    };

    return (
        <form className={styles['login-form']} onSubmit={handleSubmit}>
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
