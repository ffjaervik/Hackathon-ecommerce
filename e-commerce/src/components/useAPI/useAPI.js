import { useEffect, useState } from 'react';

function useAPI() {
    const [data, setData] = useState();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://fakestoreapi.com/products`
                );
                const dataResponse = await response.json();
                setData(dataResponse);
            } catch (error) {
                console.log('error', error);
            }
        };
        fetchData();
    }, []);
    return { data };
}

export default useAPI;
