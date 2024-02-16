"use client"
import { useState, useEffect }  from 'react'

export const Index = ({urlparameter,object,}) => {
    const [objects, setObjects] = useState([]);
    useEffect(() => {
        const fetchObjects = async() => {
            const res = await fetch(urlparameter);
            const data = await res.json;
            setObjects(data[object]);
        }
    })
    return (
        <div>index</div>
    )
}
