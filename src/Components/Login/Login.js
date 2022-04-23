import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import { AppContext } from '../../App';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const {setUserData, userData} = useContext(AppContext);

    const navigate = useNavigate();

    const handleChange = (event) => {
        if (event.target.name === 'email') {
            setEmail(event.target.value);
        }
        if (event.target.name === 'password') {
            setPassword(event.target.value);
        }
    }

    const handleLogin = (event) => {
        event.preventDefault();
        console.log(email, password);
        if (email === '' && password === '') {
            setError('Please enter email and password');
        } else if (password.length < 6) {
            setError('Password must be at least 6 characters');
        }
        else if (email === userData.email && password === userData.password) {
            navigate('/home');
            setEmail('');
            setPassword('');
            setError('');
        } else {
            setError('Login Failed');
        }

    }
    return (
       <div>
            <form onSubmit={handleLogin}>
            {
                error !== '' ? <p className="alert alert-danger">{error}</p> : ''
            }
            <input type="email" placeholder="Enter your email" name="email" value={email} onChange={handleChange} />
            <br />
            <input type="password" placeholder="Enter your password" name="password" value={password} onChange={handleChange} />
            <br />
            <input type="submit" />
        </form>
        <Link to="/registration">I have no account</Link>
       </div>
    );
};

export default Login;