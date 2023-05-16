import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getEmployeeByID, putEmployee } from '../../../api/requests';

const EditEmployee= () => {
  const[employee,setEmployee] = useState({name:'',salary:''});
  const navigate = useNavigate();
  const{id} = useParams();
  useEffect(()=>{
    getEmployeeByID(id).then(data=>{
      setEmployee(data);
    })
  },[id]);
  function handleChange(e){
    setEmployee({...employee,[e.target.name]:e.target.value});
  }
  async function handleSubmit(e){
    e.preventDefault();
    await putEmployee(id, employee);
    setEmployee({name:'',price:''})
    navigate("/admin/employees");
  }
  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
      <input onChange={(e)=>handleChange(e)} value={employee.name} name='name' placeholder='product name' type='text'/>
      <input onChange={(e)=>handleChange(e)} value={employee.salary} name='salary' placeholder='product salary' type='number'/>
      <button type='submit'>Edit</button>
    </form>
  )
}

export default EditEmployee