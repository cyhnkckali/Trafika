import axios from "axios";
import { useState, useEffect } from 'react';

/**
 * @description Request result returns data, error,loading
 * @param url: string API pad
 */

function useFetch(url) {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const { data: responseData } = await axios.get(url);
            setData(responseData);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error.message);
        }
    }

    useEffect(() => { fetchData() }, []);
    return { error, loading, data }
}


export default useFetch