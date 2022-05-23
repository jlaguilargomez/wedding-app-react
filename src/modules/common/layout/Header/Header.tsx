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
        return (
            <header>
                <h1>Boda</h1>
            </header>
        );
    }

    return (
        <header>
            <h1>{ROUTE_MAPPER[pathname]}</h1>
        </header>
    );
}

export default Header;
