import React from 'react';
import NotFound from 'modules/common/containers/NotFound/NotFound';
import Landing from 'modules/dashboard/pages/Landing/Landing';
import Login from 'modules/login/pages/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from 'modules/common/context/Auth/auth.context';
import { Toaster } from 'react-hot-toast';

function App(): JSX.Element {
    return (
        <AuthContextProvider>
            <BrowserRouter>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Landing />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </BrowserRouter>
            <Toaster position="top-center" reverseOrder={false} />
        </AuthContextProvider>
    );
}

export default App;
