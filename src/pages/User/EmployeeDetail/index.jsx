import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEmployeeByID } from '../../../api/requests';
import { Link } from 'react-router-dom';
import style from "./index.module.css"

const EmployeeDetail = () => {
    const { id } = useParams();
    const [employee, setEmployee] = useState({});
    useEffect(() => {
        getEmployeeByID(id)
            .then(data => {
                setEmployee(data);
            })
    }, [id])
    return (
        <>
           <div className={style.details}>
          
            <div className={style.container}>
                 <Link to="/employees"><button style={{color:"white", backgroundColor:"blue", border:"none", borderRadius:"5px", padding:"5px 10px"}}>go back</button></Link>
                <h3>Detail page of {employee.name}</h3>
                <img className={style.image} src={employee.image} alt={employee.name} />
                <p style={{ color: "blue" }}>{employee.name}</p>
                <p> Position: {employee.position}</p>
                <p> salary: {employee.salary} $</p>
                <Link to="/basket"><button style={{color:"white", backgroundColor:"orangered", border:"none", borderRadius:"5px", padding:"5px 10px"}}>add to basket</button></Link>
            </div>
           </div>

        </>
    )
}

export default EmployeeDetail
