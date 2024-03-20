import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //fetching th data from server
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          // So if the Res = False then we throw an error
          if (!res.ok) {
            throw Error("Could Not Fetch the Data for that Resource");
          }
          return res.json();
        })
        .then((data) => {
          setIsPending(false);
          setData(data);
          setError(null); // if there is no error we declare null for error
        })
        .catch((err) => {
          setIsPending(false); // so when there is an error we hide the loading function
          setError(err.message);
        });
    }, 1000);
  }, []);

  return {data, isPending , error}
};

export default useFetch;
