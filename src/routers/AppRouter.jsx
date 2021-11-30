import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { login } from '../actions/auth';

import LoginScreen from '../components/login/LoginScreen';
import RegisterScreen from '../components/login/RegisterScreen';
import DashboardRouter from './DashboardRouter';
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';
import { firebase } from '../firebase/firebase-config'


const AppRouter = () => {

    const dispatch = useDispatch();
    const [isLogged, setIsLogged] = useState(false);
    const [isNotReady, setisNotReady] = useState(true)


    useEffect(() => {
        firebase.auth().onAuthStateChanged( (user) =>{
            if(user?.uid){
                setIsLogged(true);
                dispatch( login(user.uid, user.displayName) )
            } else {
                setIsLogged(false);
            }
            setisNotReady(false);
        } )
    }, [dispatch])

if(isNotReady){
    return(
        <div className="d-flex justify-content-center mt-5">

            <div className="spinner-grow text-danger" role="status" style={{ width: '3rem', height: '3rem' }}>
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

    return (
        <BrowserRouter>        
            <Routes>
                {/* <Route path="/login" element={<LoginScreen />} /> */}
                <Route path="/register" element={<RegisterScreen />} />
                <Route path="/login" element={
                    <PublicRouter isLogged={ isLogged }>
                        <LoginScreen />
                    </PublicRouter>
                } />


                <Route path="/*" element={
                    <PrivateRouter isLogged={ isLogged }>
                        <DashboardRouter />
                    </PrivateRouter>
                } />

            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
