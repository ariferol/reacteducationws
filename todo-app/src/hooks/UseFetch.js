import { useState, useEffect } from 'react';

/**
 * Fetch Hook Örneğidir.
 *
 * @param {string}  url Backend te tetiklenecek olan action mathodu url adresi.
 *
 * @param {object}  config Fetch ayarları.
 * @example
 *
 * const [response, loding, error] = useFetch({url:});
 */
const useFetch = (url, config) => {
    const [response, setResponse] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url, config)
            .then((response) => response.json())
            .then((data) => {
                setResponse(data);
                setLoading(false);
            })
            .catch(() => {
                setError("Bir hata oluştu: ", error.message);
                setLoading(false);
            });
    }, []);

    return [response, loading, error];
};

export default useFetch;