import React, { useContext, useEffect } from 'react';
import cn from 'classnames';

import LoginForm from 'modules/login/containers/LoginForm/LoginForm';

import styles from 'styles/pages/LoginPage.module.scss';
import { AuthContext } from 'context/Auth/auth.context';
import { useLocation, useNavigate } from 'react-router-dom';
import Loader from 'modules/common/components/Loader/Loader';

type LocationProps = {
    state: {
        from: Location;
    };
};

function Login(): JSX.Element {
    const { loading, isAuthenticated } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation() as unknown as LocationProps;

    useEffect(() => {
        if (isAuthenticated) {
            const from = location.state?.from?.pathname || '/';
            navigate(from);
        }
    }, [isAuthenticated, navigate, location]);

    if (loading) {
        return <Loader show />;
    }

    return (
        <div className={styles['login-page']}>
            <h1 className={cn('title')}>¡Bienvenid@!</h1>
            <LoginForm />
        </div>
    );
}

export default Login;
