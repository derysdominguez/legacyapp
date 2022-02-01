import React, { useContext } from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../auth/Auth';

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {

    const { currentUser } = useContext(AuthContext);

    if(!currentUser) return <Navigate to='/' />
    
    return <Outlet />
}

export default PrivateRoute;