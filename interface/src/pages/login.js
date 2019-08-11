import React from 'react';
import logo from '../images/logo.svg';
import './login.css';

const login = () => {
    return(
        <div className="container">
            <form className='login-form'>
                <img src={ logo }/>
                <input type='text' placeholder='Enter your GitHub user'/>
                <button>Sign In</button>
            </form>
        </div>
    );
}

export default login;