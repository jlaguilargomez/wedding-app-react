import React from 'react';
import NotFound from 'modules/common/pages/NotFound/NotFound';
import Landing from 'modules/dashboard/pages/Landing/Landing';
import Login from 'modules/login/pages/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from 'context/Auth/auth.context';
import { Toaster } from 'react-hot-toast';
import AuthGuard from 'modules/common/guards/auth.guard';
import Main from 'modules/dashboard/pages/Main/Main';
import Info from 'modules/info/pages/Info/Info';
import JoinForm from 'modules/form/pages/JoinForm/JoinForm';
import { UserDataProvider } from 'context/UserData/userData.context';

function App(): JSX.Element {
    return (
        <AuthContextProvider>
            <UserDataProvider>
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
                            <Route
                                path="/join"
                                element={
                                    <AuthGuard>
                                        <JoinForm />
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
            </UserDataProvider>
        </AuthContextProvider>
    );
}

export default App;
