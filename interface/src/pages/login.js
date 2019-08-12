import React,{ useState } from 'react';
import logo from '../images/logo.svg';
import api from '../services/api';
import './login.css';

const Login = ({ history }) => {
    const [ username,setUsername ] = useState('');

    async function handleSubmit(e){
        e.preventDefault();

        const response = await api.post('devs',{ username });
        console.log(response);
        history.push('/devs');
    }

    return(
        <div className="container">
            <form className='login-form' onSubmit={ handleSubmit }>
                <img src={ logo } alt='Tindev'/>
                <input 
                    type='text' 
                    placeholder='Enter your GitHub user'
                    value={ username }
                    onChange={ e => setUsername(e.target.value) }
                />
                <button>Sign In</button>
            </form>
        </div>
    );
}

export default Login;