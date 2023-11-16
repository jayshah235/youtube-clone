import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { routeObject } from "./routes";
import { StoreProvider } from "./store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { InitialLoadUi } from "./components/initial-load-ui-component";
import "./index.css";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StoreProvider>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<InitialLoadUi />}>
          <RouterProvider router={routeObject} />
        </Suspense>
      </QueryClientProvider>
    </StoreProvider>
  </React.StrictMode>
);
