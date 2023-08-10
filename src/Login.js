import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  const navigate = useNavigate(); 
  
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); 

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleApi = () => {
    console.log(email, password);
    axios
      .post('https://ismmart-dd9fd21491a7.herokuapp.com/login', {
        email: email,
        password: password,
      })
      .then((result) => {
        console.log(result.data);
        setAuthenticated(true); 
        setShowSuccessMessage(true);
        navigate('/home', { state: { showSuccessMessage: true } });
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 5000);
      })
    
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className='login'>
        <h2>LOGIN FORM</h2>
        
        <div className='form-group'>
          <label htmlFor='Email'>Email address</label>
          <input type="email" onChange={handleEmail} />
        </div>
        <div className='form-group'>
          <label htmlFor='Password'>Password</label>
          <input type="password" onChange={handlePassword} />
        </div>
        <div className='form-group'>
          <label htmlFor='check'>Remember me</label>
          <input type='checkbox' />
        </div>
        <div>
          <button type='button' onClick={handleApi} className='btn'>
            SIGN IN
          </button>
        </div>

        <Link to="/signup">DON'T HAVE AN ACCOUNT</Link>
      </div>
    </div>
  );
}

export default Login;
