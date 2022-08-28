import React, { ReactNode, useLayoutEffect } from 'react';
import NotFound from 'modules/common/pages/NotFound/NotFound';
import Landing from 'modules/dashboard/pages/Landing/Landing';
import Login from 'modules/login/pages/Login/Login';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AuthContextProvider } from 'context/Auth/auth.context';
import { Toaster } from 'react-hot-toast';
import AuthGuard from 'modules/common/guards/auth.guard';
import Main from 'modules/dashboard/pages/Main/Main';
import Info from 'modules/info/pages/Info/Info';
import JoinForm from 'modules/form/pages/JoinForm/JoinForm';
import { UserDataProvider } from 'context/UserData/userData.context';
import Header from 'modules/common/layout/Header/Header';
import Footer from 'modules/common/layout/Footer/Footer';

const ScrollToTopWrapper = ({
    children,
}: {
    children: JSX.Element;
}): JSX.Element => {
    const location = useLocation();

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return children;
};

function App(): JSX.Element {
    return (
        <AuthContextProvider>
            <UserDataProvider>
                <BrowserRouter>
                    <ScrollToTopWrapper>
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
                                            <>
                                                <Header />
                                                <Main />
                                                <Footer />
                                            </>
                                        </AuthGuard>
                                    }
                                />
                                <Route
                                    path="/info"
                                    element={
                                        <AuthGuard>
                                            <>
                                                <Header />
                                                <Info />
                                                <Footer />
                                            </>
                                        </AuthGuard>
                                    }
                                />
                                <Route
                                    path="/join"
                                    element={
                                        <AuthGuard>
                                            <>
                                                <Header />
                                                <JoinForm />
                                                <Footer />
                                            </>
                                        </AuthGuard>
                                    }
                                />
                                <Route path="login" element={<Login />}>
                                    <Route path=":userId" element={<Login />} />
                                </Route>
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </div>
                    </ScrollToTopWrapper>
                </BrowserRouter>
                <Toaster position="top-center" reverseOrder={false} />
            </UserDataProvider>
        </AuthContextProvider>
    );
}

export default App;
