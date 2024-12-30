import React from 'react';
import styles from './Login.module.css';

import email_icons from '../Assets/email.png';
import password_icons from '../Assets/password.png';

export const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.text}>Login</div>
        <div className={styles.underline}></div>
      </div>
      <div className={styles.inputs}>
        <div className={styles.input}>
          <img src={email_icons} alt="" />
          <input type="email" placeholder="Email" />
        </div>
      </div>
      <div className={styles.inputs}>
        <div className={styles.input}>
          <img src={password_icons} alt="" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      <div className={styles.login}>Login</div>
    </div>
  );
};
