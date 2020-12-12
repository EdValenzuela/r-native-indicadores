import React, {useState, useEffect} from 'react';

const useFetch = (url) => {
  
  const [data, setData] = useState([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    console.log('useFetch', url);
    const getData = async () => {
      try {
        const resp = await fetch(url);
        const data = await resp.json();
        console.log('useFetch OK', data);
        setData(data);
        setFetching(false);
      } catch (error) {
        console.log('useFetch ERROR', error);
      }
    };
    getData();
  }, [url]);

  return [data, fetching];
};

export default useFetch;
