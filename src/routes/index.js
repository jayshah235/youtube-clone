import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/error-page";
import { MainLayout } from "../pages/main";
import { HomePage } from "../pages/homepage";

export const routeObject = createBrowserRouter([
  {
    path: "youtube-clone",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <>about</>,
      },
    ],
  },
]);
