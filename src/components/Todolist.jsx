import { useState } from "react";

function Todolist () {
    const [name, setName]=useState("");
    const [studentList, setStudentList]= useState([]);
    return (
    <>
        <p>Name:{name}</p>
        <ul>
            Alumnos: {studentList.map(student => <li>{student}</li> )}
        </ul>
        <input 
        type="text"
        onChange={(e)=>{
            setName(e.target.value);
        }}

    />
        <button 
        onClick={() => {
            setStudentList([...studentList,name]);
        }}
        >
            Add student to the list </button>
        </>
    )
    ;
};

export default Todolist;