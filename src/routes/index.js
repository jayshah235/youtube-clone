import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/error-page";
import { MainLayout } from "../pages/main";
import { HomePage } from "../pages/homepage";
import VideoDetailPage from "../pages/video-detail-page";

export const routeObject = createBrowserRouter([
  {
    path: "*",
    element: <ErrorPage />,
  },
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
        path: "watch/:ids",
        element: <VideoDetailPage />,
      },
    ],
  },
]);
