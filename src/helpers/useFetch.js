import { useEffect, useState } from 'react';
import pRetry from 'p-retry';

export const useFetch = (url, options) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        return json;
      } catch (error) {
        throw new Error();
      }
    };

    (async () => {
      try {
        const result = await pRetry(fetchData, { retries: 5 });
        setResponse(result);
      } catch (error) {
        setError(error);
      }
    })();
  }, [options, url]);

  return { response, error };
};
