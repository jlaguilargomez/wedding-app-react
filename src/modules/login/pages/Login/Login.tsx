import React, { useContext, useEffect } from 'react';
import cn from 'classnames';

import LoginForm from 'modules/login/containers/LoginForm/LoginForm';

import styles from 'styles/pages/LoginPage.module.scss';
import { AuthContext } from 'modules/common/context/Auth/auth.context';
import { useNavigate } from 'react-router-dom';
import Loader from 'modules/common/components/Loader/Loader';

function Login(): JSX.Element {
    const { loading, isAuthenticated } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated, navigate]);

    if (loading) {
        return <Loader show />;
    }

    return (
        <>
            <h1 className={cn(styles['login-page'], 'title')}>¡Bienvenid@!</h1>
            <LoginForm />
        </>
    );
}

export default Login;
