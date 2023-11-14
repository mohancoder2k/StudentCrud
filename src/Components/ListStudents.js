import React, { useState, useEffect } from 'react';
import './ListStudent.css';
const ListStudent = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch('http://localhost:8080/mohan/students');
        if (response.ok) {
          const data = await response.json();
          setStudents(data);
        } else {
          console.error('Failed to fetch students.');
        }
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div>
      <h2>List of Students</h2>
      <table>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name},{student.course},{student.branch},{student.year}-{student.sec}, {student.blood}, {student.phone} 
          </li>
        ))}
      </ul>
      </table>
    </div>
  );
};

export default ListStudent;
