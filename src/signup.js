import React, { useState } from 'react';

import './Signup.css';
import { Link } from 'react-router-dom';
import axios from 'axios';


function Signup() {
  const [name,setName]=useState('');
  

  const [email,setEmail]=useState('');

  const [accountCreated, setAccountCreated] = useState(false);


  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  
  const handleEmail=(event)=>{
    setEmail(event.target.value)
  }
  const handlePassword=(event)=>{
    setPassword(event.target.value)
  }
  const handleName=(event)=>{
    setName(event.target.value)
  }
const handleApi=()=>{
  axios.post('https://ismmart-dd9fd21491a7.herokuapp.com/signup',{
    name:name,
    email:email,
    password:password,
    confirmPassword:passwordRepeat,
  })
  .then(result=>{
    console.log(result.data)
    setAccountCreated(true);
  })
  .catch(err=>{
    console.log(err)
  })

}
  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== passwordRepeat) {
      alert('Passwords do not match.');
      return;
    }
    

    
  };

  return (
    <div className="container">
      <h1>SIGN UP</h1>
      <p>Please fill in this form to create an account.</p>
      <hr />

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">name</label>
        <input
          type="text"
          placeholder="Enter your Name"
          name="name"
          onChange={handleName}
        />

        <label htmlFor="email">Email </label>
        <input
          type="text"
          placeholder="Enter Email"
          name="email "
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"

          onChange={handleEmail} 
        />

        <label htmlFor="psw">Password </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
          minLength="8"
          onChange={(e) => {
            setPassword(e.target.value);
            handlePassword(e);
          }}
        />
        
        
        
        
        
        
         
        <label htmlFor="psw-repeat">confirm Password</label>
        <input
          type="password"
          placeholder="confirm Password"
          name="psw-repeat"
          required
          minLength="8"
          onChange={(e) => setPasswordRepeat(e.target.value)}
        />

  
<div className='form-group'>
      <label htmlfor='check'>Remember me
      </label>
      <input type='checkbox'></input>
    </div>
    

        <p>By creating an account you agree to our <a href="#" style={{ color: 'dodgerblue' }}>Terms & Privacy</a>.</p>

        <div className="clearfix">
          <button type="button" className="cancelbtn">login</button>
          <button type="button" className="signupbtn" onClick={handleApi}>Sign Up</button>
          {accountCreated && (
  <div className="success-message">
    Account created successfully!
  </div>
)}

          <div><Link to="/login">login page</Link></div>
        </div>
       
      </form>
    </div>
  );
}

export default Signup;
