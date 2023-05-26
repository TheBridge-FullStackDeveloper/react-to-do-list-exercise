import { useState } from "react";

function Todolist () {
    const [nombre, setName]=useState("");
    return (
        <>
        <p>Name:{nombre}</p>
        <input type="text" onChange={()=>{
            setName("Georgio");
        }}/>
        </>
    )
    ;
};

export default Todolist;