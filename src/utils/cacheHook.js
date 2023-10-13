import { useQuery } from "@tanstack/react-query";
import { options } from "./fetchHook";

const fetchHook = async (url) => {
  const response = await fetch(url, options);
  const data = response?.json();
  return data;
};

export const useCache = (key, apiUrl) => {
  const query = useQuery([key], () => fetchHook(apiUrl), {
    cacheTime: 5000,
    staleTime: 5000,
  });

  return  query;
};
