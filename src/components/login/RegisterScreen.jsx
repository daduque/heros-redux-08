import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import validator from 'validator';
import { startRegisterWithEmailPassword } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';

import { useForm } from '../../hooks/useForm';

const RegisterScreen = () => {

    const dispatch = useDispatch();

    const { msgError } = useSelector(state => state.ui)
    const [ formValues, handleInputChange ] = useForm({
        name: 'Andrés',
        email: 'prueba@gmail.com',
        password: '123456',
        password2: '123456',
        terms: true
    });
    
    const { name, email, password, password2, terms } = formValues;

    const isFormValid = () => {
        if(name.trim().length < 2){
            // console.log('El nombre debe ser de 2 o más caracteres');
            dispatch( setError('El nombre debe ser de 2 o más caracteres') );
            return false;
        }
        if( (password.length < 6) || (password !== password2) ){
            // console.log('Las contraseñas deben ser iguales y de 6 o más caracteres');
            dispatch( setError('Las contraseñas deben ser iguales y de 6 o más caracteres') );
            return false;
        }
        if( !validator.isEmail(email) ){
            dispatch( setError('El correo no es válido') );
            // console.log('El correo no es válido');
            return false;
        }
        if( !terms ){
            dispatch( setError('Debe confirmar los términos para continuar') );
            // console.log('El correo no es válido');
            return false;
        }
        dispatch( removeError() );
        return true;
    }

    const handleRegister = (e) => {
        e.preventDefault();
        
        // console.log(name, email, password, password2, terms)
        if( isFormValid() ){
            dispatch( startRegisterWithEmailPassword(email, password, name) );
        }
    }

    return (
        <div className="container mt-5">
            <h1>Register Screen</h1>

            <hr />

            <form onSubmit={ handleRegister }>
                {
                    msgError && (
                        <div className="alert alert-danger animate__animated animate__fadeIn" role="alert">
                            { msgError }
                        </div>
                    )
                }

                <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="exampleInputName" 
                        name="name"
                        value={ name }
                        onChange={ handleInputChange }
                        autoComplete="off"
                        required
                        />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp"
                        name="email"
                        value={ email }
                        onChange={ handleInputChange }
                        autoComplete="off"
                        required
                    />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="exampleInputPassword1" 
                        name="password"
                        value={ password }
                        onChange={ handleInputChange }
                        autoComplete="off"
                        required
                        />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="exampleInputPassword2" 
                        name="password2"
                        value={ password2 }
                        onChange={ handleInputChange }
                        autoComplete="off"
                        required
                        />
                </div>
                <div className="mb-3">
                    <input 
                        type="checkbox" 
                        className="form-check-input" 
                        id="exampleCheckbox1" 
                        name="terms"
                        onChange={ handleInputChange }
                        checked={ terms }
                        
                        />
                        <label htmlFor="exampleCheckbox1" className="form-check-label ms-2">Confirm terms</label>

                </div>
 
                <button type="submit" className="btn btn-outline-dark w-100">Create Account</button>
            </form>

            <div className="mt-3">

                <hr />
                <Link to="/login">
                    Already have an account? Sign in
                </Link>
            </div>

        </div>
    )
}

export default RegisterScreen
