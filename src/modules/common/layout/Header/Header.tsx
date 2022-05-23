import React from 'react';
import { useLocation } from 'react-router-dom';

const ROUTE_MAPPER: { [key: string]: string } = {
    '/main': '¡Nos casamos!',
    '/join': 'Confirmar asistencia',
    '/info': 'Info del evento',
};

function Header(): JSX.Element {
    const { pathname } = useLocation();

    if (!pathname) {
        return <h1>Boda</h1>;
    }

    return <h1>{ROUTE_MAPPER[pathname]}</h1>;
}

export default Header;
