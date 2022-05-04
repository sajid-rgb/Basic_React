import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import { AppContext } from '../../App';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const {userData, setUser} = useContext(AppContext);

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
        const loginUser = userData.find(user => user.email === email && user.password === password);
        if (email === '' && password === '') {
            setError('Please enter email and password');
        } else if (password.length < 6) {
            setError('Password must be at least 6 characters');
        }
        else if (email === loginUser.email && password === loginUser.password) {
            navigate('/home');
            setUser(loginUser);
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