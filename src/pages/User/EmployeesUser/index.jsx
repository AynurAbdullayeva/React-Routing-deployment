import React, { useEffect, useState } from 'react'
import { getAllEmployees } from "../../../api/requests"
import { Link } from 'react-router-dom';
import style from './index.module.css'

const EmployeesUser = () => {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    getAllEmployees().then(data => {
      setEmployees(data);
    })
  })
  return (
    <>
      <h4 style={{textAlign:"center", marginTop:"40px",marginBottom:"20px"}}>Employees:</h4>
      <div className={style.row}>
            {employees && employees.map((employee) => {
              return  <div className="col-3">
                <p key={employee.id}> <Link to={`${employee.id}`}>{employee.name}</Link> </p>
                <img className={style.image} src={employee.image} alt={employee.name} />
                <p>Position: {employee.position}</p> 
                <p>salary: {employee.salary}$</p>
                </div>
            })}
      </div>
    </>
  )
}

export default EmployeesUser
