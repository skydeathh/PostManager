import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from "../router/routes";
import { useContext } from 'react';
import { AuthContext } from '../context/context';
import Loader from './UI/Loader/Loader';

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);

    // if (isLoading) {
    //     return <Loader/>
    // }

    return (
        isAuth ? <Routes>

            {privateRoutes.map(r => {
                return (
                    <Route
                        key={r.path}
                        path={r.path}
                        element={<r.component />}
                        exact={r.exact}
                    />
                );
            })}
            </Routes>
            : <Routes>
                {publicRoutes.map(r => {
                    return (
                        <Route
                            key={r.path}
                            path={r.path}
                            element={<r.component />}
                            exact={r.exact}
                        />
                    );
                })}
            </Routes>
    )
}

export default AppRouter;