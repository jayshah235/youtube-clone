import { createContext, useContext, useState } from "react";

export const CreateStore = createContext();

export const StoreProvider = ({ children }) => {
  const storage = localStorage.getItem("theme");
  const [theme, setTheme] = useState(storage ?? 'light-theme');
  return (
    <CreateStore.Provider value={{ theme, setTheme }}>
      {children}
    </CreateStore.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(CreateStore);
};
