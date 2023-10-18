import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

const LazyLoadMainLayout = lazy(() => import('../pages/main'));
const LazyErrorPage = lazy(() => import('../components/error-page'));
const LazyVideoDetailPage = lazy(() => import('../pages/video-detail-page'))
const LazyLoadHomePage = lazy(() => import('../pages/homepage'));
const LazyLoadSearchResultsPage = lazy(() => import('../pages/searched-results-page'));


export const routeObject = createBrowserRouter([
  {
    path: "*",
    element: <LazyErrorPage />,
  },
  {
    path: "youtube-clone/*",
    element: <LazyLoadMainLayout />,
    errorElement: <LazyErrorPage />,
    children: [
      {
        path: "",
        element: <LazyLoadHomePage />,
      },
      {
        path: "watch/:ids",
        element: <LazyVideoDetailPage />,
      },
      {
        path: "search/:str",
        element: <LazyLoadSearchResultsPage />,
      },
    ],
  },
]);
