import React, {useContext, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { AppContext } from '../../App';

const Registration = () => {
    const formData = useState({})
    const {setUserData, userData} = useContext(AppContext);
    const navigate = useNavigate();
    
    const handleChange = (e) => {
        formData[e.target.name] = e.target.value
    }

    const handleRegister = (e) => {
        e.preventDefault();
        setUserData([...userData, formData] );
        navigate('/login')

    }
    return (
        <div>
            <input type="text" placeholder="Enter your name" name="name" onChange={handleChange} />
            <br />
            <input type="text" placeholder="Enter your email" name="email" onChange={handleChange} />
            <br />
            <input type="password" placeholder="Enter your password" name="password" onChange={handleChange} />
            <br />
            <input type="password" placeholder="Confirm your password" name="confirmPassword" onChange={handleChange} />
            <br />
            <button onClick={handleRegister}>Register</button>
             <div>
             <Link to="/login">I have allreday an account</Link>
             </div>

        </div>
    );
};

export default Registration;