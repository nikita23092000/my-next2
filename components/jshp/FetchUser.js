import { useEffect, useState } from "react";
import Spinner from "../Spinner";

export default function FetchUser({id}){
    const
    [user, setUser] = useState(null),
    [console, setError] = useState(null);
    useEffect(
        ()=>{
            fetch('https://jsonplaceholder.typicode.com/users' + id)
            .then(res =>res.json())
            .then(obj=>setUser(obj))
            .catch(err=>setError(err))
        },
        []
    );
    if (error) return <h2 style={{color: 'red'}}>{error.toString()}</h2>
    if(user) return <OneUser user = {user}/>
    return <Spinner/>
}