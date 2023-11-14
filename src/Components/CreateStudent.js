import React, { useState} from 'react';
import './CreateStudent.css'; 
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const CreateStudent = () => {
  const [newstudent, setStudent] = useState({
    name:'',
    course:'',
    branch:'',
    year:'',
    sec:'',
    blood:'',
    phone:'',
  });
  const navigate = useNavigate(); 
  const handleCreateUser = () => {
    axios.post('http://localhost:8080/mohan/students', newstudent)
      .then(() => {console.log("success")}).catch(error => {
        console.error('Error creating student: ', error);     
      });
  };
  const handleDeleteStudent = () => {
    axios.delete(`http://localhost:8080/mohan/students/${newstudent.id}`)
      .then(() => {})
      .catch(error => {
        console.error('Error deleting student: ', error);
      });
  };

  return (
    <div>
      <h2>Create Student</h2>
      <form >
        <label>Name:</label>
        <input
        type="text"
        value={setStudent.name}
        onChange={(e)=>setStudent({...newstudent, name:e.target.value})}  
        />
          <label>Course:</label>
          <input
            type="text"
            id="course"
            value={setStudent.course}
            onChange={(e)=>setStudent({...newstudent, course:e.target.value})}  
        />
          <label htmlFor="name">Branch:</label>
          <input
            type="text"
            id="branch"
            name="branch"
            value={setStudent.branch}
            onChange={(e)=>setStudent({...newstudent, branch:e.target.value})}  
          />
          <label htmlFor="name">Year:</label>
          <input
            type="number"
            id="year"
            name="year"
            value={setStudent.year}
            onChange={(e)=>setStudent({...newstudent, year:e.target.value})}  
          />
          <label htmlFor="name">Section:</label>
          <input
            type="text"
            id="sec"
            name="sec"
            value={setStudent.sec}
            onChange={(e)=>setStudent({...newstudent, sec:e.target.value})}  
          />
          <label htmlFor="">Blood Group :</label>
          <input
            type="text"
            id="blood"
            name="blood"
            value={setStudent.blood}
            onChange={(e)=>setStudent({...newstudent, blood:e.target.value})}  
          />
          <label htmlFor="name">Phone:</label>
          <input
            type="number"
            id="phone"
            name="phone"
            value={setStudent.phone}
            onChange={(e)=>setStudent({...newstudent, phone:e.target.value})}  
          />
        <button type="submit" onClick={handleCreateUser} >Submit</button>
        <button onClick={()=>navigate("/list")}>List Student</button> 
        <button onClick={()=>navigate("/edit")}>Edit Student</button>
        <button onClick={handleDeleteStudent} >Delete Student</button>
        
      </form>
    </div>
  );
};

export default CreateStudent;
