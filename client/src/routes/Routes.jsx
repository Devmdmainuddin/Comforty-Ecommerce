import { createBrowserRouter,} from "react-router-dom";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import Main from '../layout/Main'
import Shop from "../pages/Shop/Shop";
import Product from "../pages/Product/Product";
import Login from "../pages/Auth/Login";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/shop",
          element: <Shop />,
        },
        {
          path: "/product",
          element: <Product/>,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        // {
        //   path: "/register",
        //   element: <Registation />,
        // },
      ],
    },
    {
      future: {
        v7_skipActionErrorRevalidation: true, // Opt-in to skip revalidation after 4xx/5xx errors
        v7_partialHydration: true,
      },
    }
  ]);