import { useState, useEffect } from "react";
import {getUsers, User} from '../Services/User';

/**
 * Fetch Hook Örneğidir.
 *
 * @param {string}  url Backend te tetiklenecek olan action mathodu url adresi.
 * @param {object}  config Fetch ayarları.
 * @example
 *
 * const [response, loding, error] = useFetch({url:});
 */
const useFetch = (url: string, config: any) => {
    const [response, setResponse] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const res = await getUsers();
            setResponse(res);
            setLoading(false);
        } catch (error) {
            setError(error);
        }
    };

    return [response, loading, error];
};

export default useFetch;
