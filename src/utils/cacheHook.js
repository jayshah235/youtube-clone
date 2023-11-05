import { useQuery } from "@tanstack/react-query";
import { myConfig } from "../config";

const fetchHook = async (url) => {
  const response = await fetch(url);
  const data = response?.json();
  return data;
};

export const useCache = (key, apiUrl) => {
  const query = useQuery(
    [key],
    () =>
      fetchHook(
        `${myConfig.API_ENDPOINT}/${apiUrl}&regionCode=IN&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
      ),
    {
      cacheTime: 500000,
      staleTime: 500000,
    }
  );

  return query;
};
