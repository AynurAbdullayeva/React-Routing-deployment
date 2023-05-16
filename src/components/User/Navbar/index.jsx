import React from 'react';
import { Link } from 'react-router-dom';
import style from "./index.module.css"

const UserNavbar = () => {
  return (
    <>
   <ul className={style.nav}>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/employees'>Employees</Link></li>
    <li><Link to='/admin'>Admin Panel</Link></li>
    <li><Link to='/basket'>Basket</Link></li>
   </ul>
    </>
  )
}

export default UserNavbar