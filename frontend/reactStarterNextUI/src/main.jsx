import { Auth0Provider } from "@auth0/auth0-react";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { UserProvider } from "./Context/userContext.jsx";
import Layout from "./Layout/Layout.jsx";
import { router } from "./Router/router.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <UserProvider>
      <HelmetProvider>
        <Auth0Provider
          domain={import.meta.env.VITE_DOMAIN}
          clientId={import.meta.env.VITE_CLIENTID}
          authorizationParams={{
            redirect_uri: window.location.origin,
          }}
          cacheLocation="localstorage"
        >
          <RouterProvider router={router}>
            <NextUIProvider>
              <Layout />
            </NextUIProvider>
          </RouterProvider>
        </Auth0Provider>
      </HelmetProvider>
    </UserProvider>
  // </React.StrictMode>
);
