import React from 'react'
import './LoginSignup.css'

import email_icons from '../Assets/email.png'
import password_icons from '../Assets/password.png'

export const LoginSignup = () => {
  return (
    <div className='container' >
        <div className='header'>
            <div className="text">
                Login</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={email_icons} alt="" />
            <input type="email" placeholder='Email' />
          </div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={password_icons} alt="" />
            <input type="password" placeholder='Password' />
          </div>
        </div>
        <div className="login">
          Login
          </div>
    </div>
  )
}
