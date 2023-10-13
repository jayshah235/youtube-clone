import { useQuery } from "@tanstack/react-query";
import { myConfig } from "../config";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": myConfig.API_PUBLIC_KEY,
    "X-RapidAPI-Host": myConfig.API_HOST,
  },
};

const fetchHook = async (url) => {
  const response = await fetch(url, options);
  const data = response?.json();
  return data;
};

export const useCache = (key, apiUrl) => {
  const query = useQuery([key], () => fetchHook(apiUrl), {
    cacheTime: 120000,
    staleTime: 120000,
  });

  return  query;
};
