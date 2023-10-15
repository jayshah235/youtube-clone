import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { routeObject } from "./routes";
import { StoreProvider } from "./store/store";
import { Auth0Provider } from "@auth0/auth0-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH_DOMAIN_KEY}
      clientId={process.env.REACT_APP_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <StoreProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={routeObject} />
        </QueryClientProvider>
      </StoreProvider>
    </Auth0Provider>
  </React.StrictMode>
);
