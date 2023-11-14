import CreateStudent from './Components/CreateStudent';
import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ListStudent from './Components/ListStudents';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import EditStudent from './Components/EditStudent';


function App() {
  const [students, setStudents] = useState([]);
  const [ setSelectedStudent] = useState(null);

  useEffect(() => {
    axios.get('/mohan/students')
      .then(response => {
        setStudents(response.data);
      })
      .catch(error => {
        console.error('Error fetching students: ', error);
      });
  }, []);

  const handleCreateStudent = (newstudent) => {
    axios.post('/api/customers', newstudent)
      .then(response => {
        setStudents([...students, response.data]);
        setSelectedStudent(null);
      })
      .catch(error => {
        console.error('Error creating student: ', error);
      });
  };


  return (
    <div className="App">
      <BrowserRouter> 
      <Routes> 
        <Route exact path="/" element={<CreateStudent onCreate={handleCreateStudent} />}/> 
        <Route exact path="/list" element={<ListStudent/>}/> 
        <Route exact path="/edit" element={<EditStudent/>}/> 
        <Route exact path="/home" element={<CreateStudent/>}/> 
        
      </Routes> 
      </BrowserRouter> 
    </div>
  );
}

export default App;
