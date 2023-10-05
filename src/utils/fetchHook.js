import { useEffect, useState } from "react";
import { myConfig } from "../config";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": myConfig.API_PUBLIC_KEY,
    "X-RapidAPI-Host": myConfig.API_HOST,
  },
};

export const CustomFetchHook = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const getResponse = await fetch(url, options);
        const response = await getResponse.json();
        setData(response);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(err);
      }
    })();
  }, [url]);

  return { data, error, loading };
};
