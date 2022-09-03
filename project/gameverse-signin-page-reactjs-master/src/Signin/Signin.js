import React from 'react'
import './Signin.css'
import { FaFacebook,FaTwitter,FaGoogle } from "react-icons/fa";
function Signin() {
  return(
    <div className='background'>
      
      <div className="logo_nav">
        <div className="logo">INFINIX-oMeet</div>
      </div>

      <section className="bckground">
        <div className="container">
          <div className="signin__card">
            <div className="signin__header">
              <div className="logo">Sign In</div>
            </div>
            <div className="signin__inputs">
              <input type="text" placeholder='Username' className='username'/>
              <input type="password" placeholder='Password' className='password'/>
              <label>
                <input type="checkbox"/>Remember Me
              </label>
            </div>
            <div className="login__button">
              <button className='log__in'>Log In</button>
              <button className='log__in facebook'><FaGoogle/></button>
            </div>
          <div className="signin__header">
            <div className="signin__text">Don't have an account?<a href="#">Sign Up</a></div>
          </div>
          </div>
        </div>
      </section>
  
    </div>
    
  )
}

export default Signin