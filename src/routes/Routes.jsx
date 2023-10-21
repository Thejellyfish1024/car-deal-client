import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AddProduct from "../pages/AddProduct";
import MyCarts from "../pages/MyCarts";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SingleBrandPage from "../pages/SingleBrandPage";
import ProductDetails from "../pages/ProductDetails";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage";
import UpdateProduct from "../pages/UpdateProduct";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/addProduct',
            element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
        },
        {
            path:'/carts',
            element:<PrivateRoute><MyCarts></MyCarts></PrivateRoute>,
            loader:() => fetch('https://car-deal-website-server-qc5a8l7so-al-amin-rahims-projects.vercel.app/carts')
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/:brand',
          element:<SingleBrandPage></SingleBrandPage>,
          loader:() => fetch('https://car-deal-website-server-qc5a8l7so-al-amin-rahims-projects.vercel.app/cars')
        },
        {
          path:'/:brand/:id',
          element:<PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
          loader:({params}) => fetch(`https://car-deal-website-server-qc5a8l7so-al-amin-rahims-projects.vercel.app/cars/${params.id}`)
        },
        {
          path:'/updateProduct',
          element:<PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        }
      ]
    },
  ]);