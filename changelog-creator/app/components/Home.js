// @flow
import React from 'react';
import { Link } from 'react-router';
import styles from './Home.css';

const Home = () => {
  const btnStyles = [styles.btn, styles.btnGreen].join(' ');

  return (
    <div>
      <div className={styles.container}>
        <h2>Log creator</h2>
        <p>Choose the type of Log file</p>
        <div className={styles.btnContainer}>
          <Link to="/changelogcreator" className={btnStyles}>ChangeLog log</Link>
          <Link className={btnStyles}>Build History log</Link>
        </div>
        <Link to="/counter">to Counter</Link>
      </div>
    </div>
  );
};

export default Home;
