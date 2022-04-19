import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const dummyData = {
        email: 'sajid1234@gmail.com',
        password: '123456'
    }

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
        else if (email === dummyData.email && password === dummyData.password) {
            navigate('/cart');
            setEmail('');
            setPassword('');
            setError('');
        } else {
            setError('Login Failed');
        }

    }
    return (
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
    );
};

export default Login;