import React from 'react';
import NotFound from 'modules/common/containers/NotFound/NotFound';
import Landing from 'modules/dashboard/containers/Landing/Landing';
import Login from 'modules/login/containers/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App(): JSX.Element {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
