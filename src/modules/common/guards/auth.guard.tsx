import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../context/Auth/auth.context';

interface AuthGuardProps {
    children: React.ReactElement;
}

function AuthGuard({ children }: AuthGuardProps): JSX.Element {
    const { isAuthenticated } = useContext(AuthContext);
    const location = useLocation();

    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}

export default AuthGuard;
