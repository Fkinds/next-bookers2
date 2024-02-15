import { useState, useEffect }  from 'react'

export const Index = ({props}) => {
    const [objects, setObjects] = useState([]);
    useEffect(() => {
        const fetchObjects = async() => {
            const res = await fetch()
        }
    })
    return (
        <div>index</div>
    )
}
