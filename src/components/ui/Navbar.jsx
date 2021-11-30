import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from "react-router-dom";
import { startLogout } from '../../actions/auth';

const Navbar = () => {

    const { name } = useSelector(state => state.auth)
    const dispatch = useDispatch();

    const handleLogout = () => {

        dispatch( startLogout() );

    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5">
                <Link 
                    className="navbar-brand" 
                    to="/"
                >
                    Navbar
                </Link>

          
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        
                        <NavLink 
                            className={ ({ isActive }) => 'nav-link ' + (isActive? 'active' : '')}
                            to="/dc">
                                DC
                        </NavLink>
                        
                        <NavLink 
                            className={ ({ isActive }) => 'nav-link ' + (isActive? 'active' : '')} 
                            to="/marvel"
                        >
                                Marvel
                        </NavLink>
                        <NavLink 
                            className={ ({ isActive }) => 'nav-link ' + (isActive? 'active' : '')} 
                            to="/search">
                                Search
                        </NavLink>
                    
                    </div>
                </div>

                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                    <ul className="navbar-nav ml-auto">
                        <span className="nav-item nav-link text-info">
                            { name }
                        </span>
                        <button 
                            className="nav-item nav-link btn"
                            onClick={ handleLogout }
                        >
                            Logout
                        </button>
                    </ul>
                </div>


        </nav>
    )
}

export default Navbar
