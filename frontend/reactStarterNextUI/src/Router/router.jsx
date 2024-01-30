import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import About from "../Pages/About";
import Home from "../Pages/Home";
import News from "../Pages/News";
import NewsDetail from "../Pages/NewsDetail";
import Notfound from "../Pages/Notfound";
import Projects from "../Pages/Projects";
import PrivateRouter from "../Private/PrivateRouter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "news/:id",
        element: (
          <PrivateRouter>
            <NewsDetail />
          </PrivateRouter>
        ),
      },
      {
        path: "*",
        element: <Notfound />,
      },
    ],
  },
]);
