import React from 'react'
// import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
// import { AuthContext } from '../auth/authContext'

const PrivateRouter = ({ children, isLogged }) => {

    // const { user } = useContext( AuthContext );
    // const { uid } = useSelector(state => state.auth)
    const { pathname, search } = useLocation();

    localStorage.setItem('lastPath', pathname + search );
    
    return isLogged
        ? children
        : <Navigate to="/login" />
}

export default PrivateRouter
