import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Great Quotes</div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink activeClassName={styles.active} to='/quotes'>
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to='/add-quote'>
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
