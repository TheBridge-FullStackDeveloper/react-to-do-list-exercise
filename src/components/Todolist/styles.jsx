import styled from "styled-components"

const Box = styled.section`
    
    border: 4px solid;
    margin: 30px 500px 30px;
    border-radius: 10px;
    height: 20rem;
    width: 20rem;
    display: flex;
    justify-content: center;
    
    align-items: center;
    flex-direction: column;

    button {
        background: #b9c2ed;
        border: none;
    }

    li {
        list-style: none;
        background: #b9c2ed;
        display: flex;
        text-align: center;
        margin-right: 40px;
    }

    h1 {
        text-align: center;
        font-family: sans-serif;
        color: Purple;
        font-size: 30px;
    }

    .free {
        border-radius: 7px;
        height: 30px;
        weight: 25px;
        box-shadow: 3px 3px 3px 0px;
    }
`;





export default {
    Box,


}

