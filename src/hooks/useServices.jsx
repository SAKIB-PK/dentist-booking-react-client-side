import { useEffect, useState } from "react"

const useServices =()=>{
    const [post,setPost] = useState([])
    useEffect(()=>{
        fetch('/services.json')
        .then(res => res.json())
        .then(data => setPost(data))
        .catch(err =>console.log(err.message))
    },[])
    return post
}

export default useServices