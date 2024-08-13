 import React from 'react';
 
 const LoginSignUp = () => {
   return (
     <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginssignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account? <span>Login Here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By contunuing, I agree to the terms of use and policy</p>
        </div>
      </div>
       
     </div>
   );
 }
 
 export default LoginSignUp;
 
 
 