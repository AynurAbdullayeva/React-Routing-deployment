import { BASE_URL } from "./base_url";
import axios from "axios";

export const getAllEmployees=async()=>{
    let globalData;
    await axios.get(`${BASE_URL}/employees`)
    .then(res=>{
        globalData=res.data;
    })
    return globalData;
}



export const getEmployeeByID=async(id)=>{
    let globalData;
    await axios.get(`${BASE_URL}/employees/${id}`)
    .then(res=>{
        globalData=res.data;
    })
    return globalData;
}


export const postEmployee=(payload)=>{
   axios.post(`${BASE_URL}/employees/`,payload);
}


export const deleteEmployeeByID=(id)=>{
    axios.delete(`${BASE_URL}/employees/${id}`);
 }


 export const putEmployee=(id,payload)=>{
    axios.put(`${BASE_URL}/employees/${id}`,payload);
 }