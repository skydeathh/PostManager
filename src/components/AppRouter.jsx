import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from "../router/routes";

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(r => {
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