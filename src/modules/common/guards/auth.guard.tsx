import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/Auth/auth.context';

interface AuthGuardProps {
    children: React.ReactElement;
}

function AuthGuard({ children }: AuthGuardProps): JSX.Element {
    const { isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return children;
}

export default AuthGuard;
