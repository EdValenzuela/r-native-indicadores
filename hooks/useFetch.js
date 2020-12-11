import React, { useState, useEffect } from "react";

const useFetch = (url) => {

//   let amiiboLocal = JSON.parse(localStorage.getItem('amiibos')) || [];

  const [data, setData] = useState([]);
  const [fetching, setFetching] = useState(true);

//   useEffect(() => {
//     localStorage.setItem('amiibos', JSON.stringify(data));
//   }, [data]);

  useEffect(() => {
      const getData = async()=>{
        try {
            const resp = await fetch(url);
            const data = await resp.json();
            
            setData(data);
            setFetching(false);

        } catch (error) {
          console.log(error);
        }
      }
      getData();
  }, [url])

  return [
    data,
    fetching
  ]
};

export default useFetch;
