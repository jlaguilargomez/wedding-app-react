import React from 'react';
import cn from 'classnames';

import LoginForm from 'modules/login/containers/LoginForm/LoginForm';

import styles from 'styles/pages/LoginPage.module.scss';

function Login(): JSX.Element {
    return (
        <>
            <h1 className={cn(styles['login-page'], 'title')}>¡Bienvenid@!</h1>
            <LoginForm />
        </>
    );
}

export default Login;
