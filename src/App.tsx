import React from 'react';
import NotFound from 'modules/common/pages/NotFound/NotFound';
import Landing from 'modules/dashboard/pages/Landing/Landing';
import Login from 'modules/login/pages/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from 'modules/common/context/Auth/auth.context';
import { Toaster } from 'react-hot-toast';
import AuthGuard from 'modules/common/guards/auth.guard';
import Main from 'modules/dashboard/pages/Main/Main';
import Info from 'modules/info/pages/Info';

function App(): JSX.Element {
    return (
        <AuthContextProvider>
            <BrowserRouter>
                <div className="container">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <AuthGuard>
                                    <Landing />
                                </AuthGuard>
                            }
                        />
                        <Route
                            path="/main"
                            element={
                                <AuthGuard>
                                    <Main />
                                </AuthGuard>
                            }
                        />
                        <Route
                            path="/info"
                            element={
                                <AuthGuard>
                                    <Info />
                                </AuthGuard>
                            }
                        />
                        <Route path="login" element={<Login />}>
                            <Route path=":userId" element={<Login />} />
                        </Route>
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </BrowserRouter>
            <Toaster position="top-center" reverseOrder={false} />
        </AuthContextProvider>
    );
}

export default App;
