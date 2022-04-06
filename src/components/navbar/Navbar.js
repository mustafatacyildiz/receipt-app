import React from 'react'
import { Link, NavLink} from "react-router-dom";
import styles from "./Navbar.module.css";


const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <NavLink 
        to="/"
        className={({isActive})=>
        isActive ? styles.activeStyle: undefined
        }
        >
        HOME
        </NavLink>
        <NavLink 
        to="/about"
        className={({isActive})=>
        isActive ? styles.activeStyle: undefined
        }
        >
        ABOUT
        </NavLink>
        <a href='https://github.com/mustafatacyildiz'
        target="_blank"
        rel="noreferrer"
        className={({isActive})=>
        isActive ? styles.activeStyle: undefined
        }
        >
        GITHUB
        </a>
        <NavLink 
        to="/login"
        className={({isActive})=>
        isActive ? styles.activeStyle: undefined
        }
        >
        LOGOUT
        </NavLink>
    </div>
  )
}

export default Navbar;