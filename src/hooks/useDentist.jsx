import { useEffect, useState } from 'react'

const useDentist = () => {
    const [service,setServices] = useState([])
    useEffect(()=>{
        fetch('./dentist.json')
        .then(res => res.json())
        .then(data => setServices(data))
        .catch(err =>console.log(err.message))
    },[])
    return service
}

export default useDentist
