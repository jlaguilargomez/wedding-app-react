import React, { useContext, useEffect } from 'react';
import cn from 'classnames';

import LoginForm from 'modules/login/containers/LoginForm/LoginForm';

import styles from 'styles/pages/LoginPage.module.scss';
import { AuthContext } from 'modules/common/context/Auth/auth.context';
import { useNavigate } from 'react-router-dom';

function Login(): JSX.Element {
    const { isAuthenticated } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated]);

    return (
        <>
            <h1 className={cn(styles['login-page'], 'title')}>¡Bienvenid@!</h1>
            <LoginForm />
        </>
    );
}

export default Login;
