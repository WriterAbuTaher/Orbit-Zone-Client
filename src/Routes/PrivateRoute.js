import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Component/Loading';
import { AuthContext } from '../Contexts/UserContext';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <>
                <Loading></Loading>
            </>
        )
    }

    if (user && user.uid) {
        return children;
    }

    return (
        <Navigate to='/login' state={{ from: location }} replace></Navigate>
    );
};

export default PrivateRoute;