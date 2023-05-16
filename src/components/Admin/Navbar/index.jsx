import React from 'react';
import { Link } from 'react-router-dom';
import style from "./index.module.css"

const AdminNavbar = () => {
  return (
    <>
 <ul className={style.nav}>
    <li><Link to='/admin'>Dashboard</Link></li>
    <li><Link to='/admin/employees'>Employees</Link></li>
    <li><Link to='/admin/add-employee'>Add employees</Link></li>
    <li><Link to='/admin/employees/edit/:id'>Edit employees</Link></li>
   </ul>
    </>
  )
}

export default AdminNavbar