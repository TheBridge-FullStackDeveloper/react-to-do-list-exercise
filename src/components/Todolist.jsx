import { useState } from "react";

function Todolist () {
    const [nombre, setName]=useState("");
    return (
        <>
        <p>Name:{nombre}</p>
        <input type="text" onChange={(e)=>{
            setName(e.target.value);
        }}/>
        </>
    )
    ;
};

export default Todolist;