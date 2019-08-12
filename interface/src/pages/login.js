import React,{ useState } from 'react';
import logo from '../images/logo.svg';
import api from '../services/api';
import './login.css';

const Login = ({ history }) => {
    const [ username,setUsername ] = useState('');
    const [ error,setError ] = useState('');

    async function handleSubmit(e){
        e.preventDefault();
        const response = await api.post('devs',{ username });
        
        if(response.data.error){
            setError(response.data.error);
            return false;
        }

        const { _id } = response.data;
    
        history.push(`/dev/${ _id }`);
    }

    return(
        <div className="container">
            <p>{ error }</p>
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