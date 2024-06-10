// src/GoogleSignIn.js
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useState } from "react";


const clientId = '1026393981406-erb9iu1nial694laifc7gjl0khsiaqn9.apps.googleusercontent.com';

function GoogleSignIn() {

  const [formData,setFormData]=useState({email:"", password:""})

  const onSuccess = (response) => {
    console.log('Login Success: currentUser:', response);
  };

  const onFailure = (response) => {
    console.log('Login failed: res:', response);
  };

  const handleChange=(e)=>{
    setFormData({...formData, [e.target.name]: e.target.value})
  }

const handleSubmit=(e)=>{
  e.preventDefault();
  console.log("formData",formData);
}
  return (
    <div className='container p-4'>
      <h2 className="pt-2 mb-4" style={{ color: "blue" }}>Sign In Access</h2>
      <form onSubmit={handleSubmit}>
        <GoogleOAuthProvider clientId={clientId}>
          <div className=''>
            <div className='mb-4'>
              <label>Enter Email</label>
              <input className='ms-5' type='text' placeholder='Enter email address' onChange={handleChange} name='email'></input>
            </div>

            <div className='mb-4'>
              <label>Enter Password</label>
              <input className='ms-4' type='password' placeholder='Enter password' onChange={handleChange} name='password'></input>
            </div>

            <div className='mb-4'>
              <button type='submit' className='btn btn-primary'>Sign in</button>
            </div>

            <h5>Login with Google</h5>
            <GoogleLogin
              onSuccess={onSuccess}
              onFailure={onFailure}
            />
          </div>
        </GoogleOAuthProvider>
      </form>
    </div>
  );
}

export default GoogleSignIn;
