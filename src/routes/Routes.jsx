import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AddProduct from "../pages/AddProduct";
import MyCarts from "../pages/MyCarts";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SingleBrandPage from "../pages/SingleBrandPage";
import ProductDetails from "../pages/ProductDetails";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/addProduct',
            element:<AddProduct></AddProduct>
        },
        {
            path:'/carts',
            element:<MyCarts></MyCarts>
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
          loader:() => fetch('http://localhost:5000/cars')
        },
        {
          path:'/:brand/:id',
          element:<ProductDetails></ProductDetails>,
          loader:({params}) => fetch(`http://localhost:5000/cars/${params.id}`)
        }
      ]
    },
  ]);