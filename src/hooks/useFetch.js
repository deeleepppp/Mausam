import { API_BASE_URL } from "../utils/axios/weatherApi"
import axios from "axios"
import {useEffect, useState} from 'react'

const useFetch = (city) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const apiKey =  import.meta.env.VITE_API_KEY;
        setLoading(true)
        setData(null);
        setError(null);
        axios.get( `${API_BASE_URL}/${city}?key=${apiKey}`)
        .then(res => {
            setLoading(false);
            res.data && setData(res.data);
        })
        .catch(err => {
            setError(err.message)
            
        })
},[city])
    return { data, loading, error }
}

export default useFetch
