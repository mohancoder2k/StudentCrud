import React, { useState } from 'react';
import axios from 'axios';
import './EditStudent.css';
import {useNavigate} from "react-router-dom";
function EditStudent(student){
    const [editStudent, setEditStudent] = useState({ ...student });
    const navigate = useNavigate(); 
  const handleEditStudent = () => {
    axios.put(`http://localhost:8080/mohan/students/${student.id}`, editStudent)
      .then(() => {})
      .catch(error => {
        console.error('Error updating student: ', error);
      });
  };
    return(
        <div>
            <h2>Create Student</h2>
      <form >
          <label>Name:</label>
          <input
            type="text"
            id="name"
            value={editStudent.name}
            onChange={(e)=>setEditStudent({...editStudent, name:e.target.value})}  
        />
        <label>Course:</label>
          <input
            type="text"
            id="course"
            value={editStudent.course}
            onChange={(e)=>setEditStudent({...editStudent, course:e.target.value})}  
        />
        <label>Branch:</label>
          <input
            type="text"
            id="branch"
            value={editStudent.branch}
            onChange={(e)=>setEditStudent({...editStudent, branch:e.target.value})}  
        />
        <label>Year:</label>
          <input
            type="number"
            id="year"
            value={editStudent.year}
            onChange={(e)=>setEditStudent({...editStudent, year:e.target.value})}  
        />
        <label>Section:</label>
          <input
            type="text"
            id="sec"
            value={editStudent.sec}
            onChange={(e)=>setEditStudent({...editStudent, sec:e.target.value})}  
        />
        <label>Blood Group :</label>
          <input
            type="text"
            id="blood"
            value={editStudent.blood}
            onChange={(e)=>setEditStudent({...editStudent, blood:e.target.value})}  
        />
        <label>Phone :</label>
          <input
            type="number"
            id="phone"
            value={editStudent.phone}
            onChange={(e)=>setEditStudent({...editStudent, phone:e.target.value})}  
        />
        <button type="submit" onClick={handleEditStudent} >Update</button>

        <button onClick={()=>navigate("/home")}>Back to Home</button>
    
      </form>

        </div>
    )
}
export default EditStudent;