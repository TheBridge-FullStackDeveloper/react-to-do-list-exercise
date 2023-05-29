import { useState } from "react";

export const useList = () => {
    const [list, setList] = useState([]);

    return [list, setList];
}