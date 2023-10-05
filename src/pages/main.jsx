import React, { Suspense, lazy, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useGlobalContext } from "../store/store";

const LazyHeader = lazy(() => import("../components/header"));

export const MainLayout = () => {
  const { theme, setTheme } = useGlobalContext();

  const toggleMode = () => {
    theme === "light-theme" ? setTheme("dark-theme") : setTheme("light-theme");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <main>
      <Suspense fallback={<>header...</>}>
        <LazyHeader themeMode={() => toggleMode()} />
      </Suspense>
      <Outlet />
    </main>
  );
};