import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import AllProducts from "../pages/allProducts/AllProducts";

const router = createBrowserRouter([{
    path:'/',
    element:<MainLayout/>,
    errorElement: <div>Errooooooor</div>,
    children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/products',
            element:<AllProducts/>
        },
    ]
}])

export default router;