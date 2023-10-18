import { useEffect, useState } from "react";

export const CustomFetchHook = (url, appendNewData) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const getResponse = await fetch(url);
        const response = await getResponse?.json();
        if (response?.error) {
          throw new Error('Oops Something Went Wrong....');
        };
        if (appendNewData) {
          setData((prev) => [...prev, ...response?.items]);
        } else {
          setData(response);
        }
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(err);
      }
    })();
  }, [url]);

  return { data, error, loading };
};
