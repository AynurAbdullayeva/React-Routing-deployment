import React from 'react';
import { Link } from 'react-router-dom';
import style from "./index.module.css"
import MenuIcon from '@mui/icons-material/Menu';

const UserNavbar = () => {
  return (
    <>

    <div className={style.nav}>
  
   <ul className={style.links}>
        <ul className={style.menu}><li><MenuIcon/></li></ul>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/about'>About</Link></li>
    <li><Link to='/contact'>Contact</Link></li>
    <li><Link to='/services'>Services</Link></li>
    <li><Link to='/login'>Login</Link></li>
    <li><Link to='/Register'>Register</Link></li>
   </ul>
   </div>
    </>
  )
}

export default UserNavbar
