import React, { useState, useEffect } from 'react';
import vide  from 'axios';

const AxiosDemo = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Axios Demo</h1>
      {videos ? (
        <div>
          <h2>{videos.title}</h2>
          <p>{videos.body}</p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default AxiosDemo;