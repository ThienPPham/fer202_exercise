import React, { useState, useEffect } from 'react'

function DemoApi() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const apiUrl = 'http://localhost:3000/posts/1';
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network respose was not ok');
                }
                return response.json();
            })
            .then(data => {
                setData(data);
            })
            .catch(error => {
                setError(error.message);
            });
    }, []);
    if (error) return <div>Error: {error}</div>;
    return (
        <div>
            <h1>{data?.title}</h1>
            <p>{data?.body}</p>
        </div>
    );
}
export default DemoApi;